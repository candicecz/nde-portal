import React, { ReactElement, useMemo } from 'react';
import { groupBy, uniqBy } from 'lodash';
import { Box, Button, Flex, InputProps, Text } from 'nde-design-system';
import { FormattedResource } from 'src/utils/api/types';
import { usePredictiveSearch } from './hooks/usePredictiveSearch';
import {
  InputWithDropdown,
  DropdownInput,
  DropdownList,
  DropdownListItem,
  DropdownContent,
} from 'src/components/input-with-dropdown';

interface SearchWithPredictiveTextProps {
  ariaLabel: string; // input label for accessibility
  placeholder: string; // input placeholder text
  field?: string; //default field to search through,
  term?: string; //default term to search with,
  size?: InputProps['size'];
  isLoading?: boolean;
  colorScheme?: InputProps['colorScheme'];
  // handleClick: (
  //   e: React.MouseEvent<HTMLLIElement, MouseEvent>,
  //   data: FormattedResource,
  // ) => void; // triggered when suggestion item from list is clicked / press enters.
  handleSubmit: (
    inputValue: string,
    field: string,
    data?: FormattedResource,
  ) => void; // triggered when suggestion item from list is clicked / press enters.
  renderSubmitButton?: (props: any) => ReactElement; // an optional custom button rendered as the "submit" button.
}

// General search bar with predictive text. Groups results by type of resource.
export const SearchWithPredictiveText: React.FC<
  SearchWithPredictiveTextProps
> = ({
  ariaLabel,
  placeholder,
  size = 'sm',
  colorScheme = 'primary',
  field: defaultField = '',
  term: defaultTerm = '',
  isLoading: defaultLoading,
  handleSubmit,
  renderSubmitButton,
}) => {
  // Search term entered in search bar
  const {
    isLoading: queryLoading,
    results,
    searchField,
    searchTerm,
    updateSearchTerm,
  } = usePredictiveSearch(defaultTerm, defaultField);

  // Handles loading spinner
  const isLoading = queryLoading || defaultLoading;

  const fieldName = defaultField || 'name';

  // List of suggestions to search query.
  const uniqueSuggestions = useMemo(
    () =>
      uniqBy(
        results.map(result => {
          let value;
          // if value is array, extract value that matches search result
          if (Array.isArray(result[fieldName])) {
            value = result[fieldName]
              .filter((r: string) => {
                let name = r.toLowerCase();
                let search = searchTerm.toLowerCase();
                return name.includes(search);
              })
              .join(',');
          } else {
            value = result[fieldName];
          }
          return { ...result, [fieldName]: value };
        }),
        // filter out duplicate values
        v => v[fieldName],
      ),
    [fieldName, searchTerm, results],
  );

  // Group suggestions by type.
  const suggestionsGroupedByType = useMemo(
    () => Object.entries(groupBy(uniqueSuggestions, d => d.type)),
    [uniqueSuggestions],
  );

  // Flat list of suggestions sorted by type.
  const suggestions = useMemo(
    () => suggestionsGroupedByType.map(d => d[1]).flat(),
    [suggestionsGroupedByType],
  );

  return (
    <Box width='100%'>
      {/* Keep dropdown agnostic from results. */}
      <InputWithDropdown
        inputValue={searchTerm}
        colorScheme='primary'
        cursorMax={suggestions.length}
      >
        <DropdownInput
          ariaLabel={ariaLabel}
          placeholder={placeholder}
          size={size}
          isLoading={isLoading}
          onChange={updateSearchTerm}
          onSubmit={(value, idx) => {
            handleSubmit(value, searchField, results[idx]);
          }}
          renderSubmitButton={props => {
            if (renderSubmitButton) {
              return renderSubmitButton({
                colorScheme: colorScheme,
                ariaLabel: ariaLabel,
                isDisabled: isLoading || false,
                size: size,
                ...props,
              });
            }
            return (
              <Button
                display='flex'
                colorScheme={colorScheme}
                aria-label={ariaLabel}
                isDisabled={isLoading || false}
                size={size}
                {...props}
              >
                Search
              </Button>
            );
          }}
        />
        <DropdownContent>
          {/* Group results by type (dataset/computational tool) */}
          {suggestionsGroupedByType.map(([type]) => {
            return (
              <Flex key={type} id={`${type}-list`} flexWrap='wrap' my={1}>
                {/* column displaying the type of result. */}
                {fieldName === 'name' && (
                  <Flex
                    flex={1}
                    justifyContent={['center', 'flex-end']}
                    bg={
                      type.toLowerCase() === 'dataset'
                        ? 'status.info_lt'
                        : 'blackAlpha.50'
                    }
                    mx={2}
                    my={1}
                    borderRadius='base'
                    minW={150}
                    maxW={{ base: 'unset', md: 180 }}
                  >
                    <Text
                      fontSize='xs'
                      color='text.body'
                      p={2}
                      textAlign='right'
                    >
                      {type}
                    </Text>
                  </Flex>
                )}

                {/* column displaying the fielded result */}

                <DropdownList flex={3}>
                  {suggestions.map((result, i) => {
                    if (result.type !== type || !result[fieldName]) {
                      return <React.Fragment key={i}></React.Fragment>;
                    }
                    return (
                      <DropdownListItem
                        key={result.id}
                        index={i}
                        searchTerm={searchTerm}
                        value={result[fieldName]}
                        name={fieldName}
                        onClick={e => {
                          handleSubmit(result[fieldName], searchField, result);
                        }}
                      >
                        {result.id}
                      </DropdownListItem>
                    );
                  })}
                </DropdownList>
              </Flex>
            );
          })}
        </DropdownContent>
      </InputWithDropdown>
    </Box>
  );
};

export * from './hooks/usePredictiveSearch';
