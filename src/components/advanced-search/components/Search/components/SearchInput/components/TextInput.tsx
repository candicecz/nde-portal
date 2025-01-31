import React from 'react';
import { Box, ButtonProps, InputProps } from 'nde-design-system';
import { PredictiveSearch } from 'src/components/search-with-predictive-text/components/PredictiveSearch';
import { UnionTypes } from 'src/components/advanced-search/components/SortableWithCombine';
import { useAdvancedSearchContext } from '../../AdvancedSearchFormContext';
import { wildcardQueryString } from 'src/components/advanced-search/utils';

interface TextInputProps {
  isDisabled?: boolean;
  colorScheme?: InputProps['colorScheme'];
  size: InputProps['size'];
  inputValue: any;
  handleClick: (args: { term: string; field: string }) => void; // triggered when suggestion item from list is clicked.
  handleChange: (value: string) => void;
  handleSubmit: (args: {
    term: string;
    field: string;
    querystring: string;
    union?: UnionTypes;
  }) => void;
  renderSubmitButton?: (props: ButtonProps) => React.ReactElement;
}

export const TextInput: React.FC<TextInputProps> = ({
  colorScheme = 'primary',
  inputValue,
  isDisabled,
  size,
  handleChange,
  handleClick,
  handleSubmit,
  renderSubmitButton,
}) => {
  const advancedSearchProps = useAdvancedSearchContext();

  const { searchField, searchOption, updateSearchTerm } = advancedSearchProps;

  const handleQueryString = (value: string) => {
    let term = value;
    if (searchOption?.transformValue) {
      term = searchOption.transformValue(value, searchField);
    }
    return term;
  };

  return (
    <Box width='100%'>
      {/* Input field with suggestions matching the search term. */}
      <PredictiveSearch
        ariaLabel='Search for datasets or tools'
        placeholder='Search for datasets or tools'
        colorScheme={colorScheme}
        size={size}
        inputValue={inputValue}
        isDisabled={isDisabled}
        onChange={value => {
          let term = value;

          // for exact search we still want the list of available options to be wildcarded.
          // https://github.com/NIAID-Data-Ecosystem/nde-portal/issues/153
          if (searchOption.value === 'exact') {
            term = wildcardQueryString({ value, field: searchField });
          } else {
            term = handleQueryString(value);
          }
          // Update the predictive search list;
          updateSearchTerm(term);
          handleChange(value);
        }}
        onClick={(term, field) => {
          let value = term;
          if (Array.isArray(term)) {
            value = `${term.join('" AND "')}`;
          }
          handleClick({ term: `"${value}"`, field });
        }}
        // isDisabled={!searchTerm || !searchOption}
        handleSubmit={(term, field) => {
          let querystring = handleQueryString(term);
          handleSubmit({ term, field, querystring });
        }}
        renderSubmitButton={props =>
          renderSubmitButton ? (
            renderSubmitButton({
              ...props,
              isDisabled:
                searchOption.value !== '_exists_' &&
                searchOption.value !== '-_exists_' &&
                inputValue === '',
            })
          ) : (
            <></>
          )
        }
        {...advancedSearchProps}
      />
    </Box>
  );
};
