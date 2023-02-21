import { Box, Button, Flex } from 'nde-design-system';
import { useEffect } from 'react';
import {
  AdvancedSearchFormContext,
  useAdvancedSearchContext,
} from 'src/components/advanced-search/components/Search';
import {
  SearchTypesConfigProps,
  SEARCH_TYPES_CONFIG,
} from 'src/components/advanced-search/components/Search/search-types-config';
import { UnionTypes } from 'src/components/advanced-search/types';
import { FlattenedItem, Value } from '../../../../types';
import { getSearchType, stripSearchTerm } from '../../helpers';
import { FieldTag } from './Field';
import { SearchLabel } from './SearchLabel';
import { TermLabel } from './Term';

export interface ItemContentProps {
  id: FlattenedItem['id'];
  childCount?: number;
  setIsEditMode: (arg: boolean) => void;
  value: FlattenedItem['value'];
  onUpdate?(
    id: FlattenedItem['id'],
    updatedValue: Partial<FlattenedItem['value']>,
  ): void;
  searchOptions: SearchTypesConfigProps[];
}

const ItemContent = ({
  id,
  childCount,
  setIsEditMode,
  value,
  onUpdate,
  searchOptions,
}: ItemContentProps) => {
  const { queryValue, selectedSearchType, selectedFieldDetails, onReset } =
    useAdvancedSearchContext();

  return (
    <Flex flex={1} p={1} mx={2} flexDirection='column'>
      <Box flex={1}>
        {/* Search option */}
        {childCount === 0 && (
          <SearchLabel value={value} options={searchOptions} />
        )}

        <Flex alignItems='center' mt={1} flex={1}>
          <Box
            flex={1}
            mr={
              selectedFieldDetails?.type === 'keyword' ||
              selectedFieldDetails?.type === 'text'
                ? 4
                : 0
            }
          >
            {/* Term string */}

            <TermLabel
              term={value.term}
              querystring={stripSearchTerm(value?.querystring || '')}
            />
          </Box>

          {/* Field Select dropdown */}
          <FieldTag />
        </Flex>
      </Box>

      <Flex alignItems='center' justifyContent='flex-end' mt={2}>
        <Button
          variant='outline'
          size='sm'
          onClick={() => {
            setIsEditMode(false);
            onReset();
          }}
          m={1}
        >
          Cancel
        </Button>
        <Button
          size='sm'
          m={1}
          isDisabled={
            !{
              ...value,
              ...queryValue,
            }.term
          }
          onClick={() => {
            let updatedQuery = {
              ...value,
              ...queryValue,
            };

            // transform the querystring according to the selected search type
            if (selectedSearchType && selectedSearchType.transformValue) {
              if (
                selectedFieldDetails?.type === 'text' ||
                selectedFieldDetails?.type === 'keyword'
              ) {
                // strip off any quotes or wildcards from the querystring that will interfere with transforming the value below.
                updatedQuery.querystring = stripSearchTerm(
                  updatedQuery.querystring,
                );
              }
              const transformed =
                selectedSearchType.transformValue(updatedQuery);
              onUpdate && onUpdate(id, { ...transformed });
            } else {
              onUpdate && onUpdate(id, updatedQuery);
            }

            setIsEditMode(false);
          }}
        >
          Submit
        </Button>
      </Flex>
    </Flex>
  );
};

interface EditableContentProps extends Value, Omit<ItemContentProps, 'value'> {
  searchOptions: SearchTypesConfigProps[];
}

export const EditableContent = (props: EditableContentProps) => {
  const { searchOptions } = props;
  const query = {
    field: props.field || '',
    union: props?.union || ('' as UnionTypes),
    term: stripSearchTerm(props?.term || ''),
    querystring: (props.querystring ? props.querystring : props.term) || '',
  };

  const searchType = getSearchType(query, searchOptions);

  return (
    <AdvancedSearchFormContext
      searchTypeOptions={searchOptions}
      value={query}
      defaultSearchType={searchType}
    >
      <ItemContent {...props} value={query} />
    </AdvancedSearchFormContext>
  );
};
