import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import {
  PageContainer,
  PageContent,
  PageHeader,
  SearchQueryLink,
} from 'src/components/page-container';
import { assetPrefix } from 'next.config';
import { Box, Flex, SearchInput, Text } from 'nde-design-system';
import {
  SummaryTable,
  Filters,
  displayQueryString,
  useFilterString,
  useQueryString,
  DylanVis,
  Network,
} from 'src/components/summary-page';
import { useHasMounted } from 'src/hooks/useHasMounted';
import { queryFilterObject2String } from 'src/components/filter';
import { FilterTags } from 'src/components/search-results-page/components/filters/components/tags';
import { useQuery } from 'react-query';
import { FacetTerm, FetchSearchResultsResponse } from 'src/utils/api/types';
import { fetchSearchResults } from 'src/utils/api';

/*
 [COMPONENT INFO]:
 Summary Page displays data using visualizations so that the user can gather some insights.

 All vis share the same query string and filtering mechanism so that they update together. The table also updates accordingly.
*/
export interface SummaryQueryResponse {
  total: number;
  facets: { [key: string]: FacetTerm[] };
}
const SummaryPage: NextPage = () => {
  // Grant queries of interest.
  const suggestedQueries = [
    {
      title: 'SysBio',
      'funding.identifier': [
        'U01AI124255',
        'AI124255',
        'U01AI124275',
        'AI124275',
        'U01AI124290',
        'AI124290',
        'U01AI124302',
        'AI124302',
        'U01AI124316',
        'AI124316',
        'U19AI135972',
        'AI135972',
        'U19AI135976',
        'AI135976',
        'U19AI135990',
        'AI135990',
        'U19AI135995',
        'AI135995',
        'U19AI135964',
        'AI135964',
        'U01 AI124319',
        'U01AI111598',
        'U19 AI106761',
        'U19AI106754',
        'U19AI106772',
        'HHSN272201200031C',
      ],
    },
    {
      title: 'CREID',
      'funding.identifier': [
        'U01AI151810',
        'AI151810',
        'U01AI151812',
        'AI151812',
        'U01AI151788',
        'AI151788',
        'U01AI151698',
        'U01AI151698',
        'U01AI151807',
        'U01AI151797',
        'U01AI151801',
        'U01AI151758',
        'U01AI151799',
        'U01AI151814',
      ],
    },
  ];

  // List of needed filters/naming convention.
  const filtersConfig: {
    [key: string]: {
      name: string;
    };
  } = {
    'includedInDataCatalog.name': { name: 'Source' },
    'funding.funder.name': { name: 'Funding' },
    'infectiousAgent.name': { name: 'Pathogen' },
    'measurementTechnique.name': {
      name: 'Measurement Technique',
    },
  };

  /*
  This hook updates the url when a query string is changed. Note that when a query string is changed, we also update pagination and filters to their default state.
  */
  const [queryString, setQueryString] = useQueryString('__all__');

  /*
  This hook updates the url to reflect the currently selected filters and keeps track of filters state.
  */
  const [filters, updateFilters, removeAllFilters] =
    useFilterString(filtersConfig);

  // [queryString] formatted for display purposes.
  const formatted_query = displayQueryString(queryString) || '';

  // Handle state for search input using url query string as default.
  const [searchTerm, setSearchTerm] = useState(formatted_query || '');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setSearchTerm(e.target.value);

  // Update search term to reflect url term.
  useEffect(() => {
    setSearchTerm(formatted_query);
  }, [formatted_query]);

  // Check if component has mounted and router has needed info.
  const hasMounted = useHasMounted();
  const router = useRouter();

  // All the facets that you need.
  const facets = [
    'includedInDataCatalog.name',
    'infectiousAgent.name',
    '@type',
    'dateModified',
    'infectiousDisease.name',
    'measurementTechnique.name',
    'date',
    'funding.funder.name',
  ];

  // This query function is interchangeable for both queries we have below.
  // const queryFn = (queryString: string, filters?: {}) => {
  //   if (typeof queryString !== 'string' && !queryString) {
  //     return;
  //   }
  //   const filter_string = filters ? queryFilterObject2String(filters) : null;

  //   return fetchSearchResults({
  //     q: filter_string
  //       ? `${
  //           queryString === '__all__' ? '' : `${queryString} AND `
  //         }${filter_string}`
  //       : `${queryString}`,
  //     facet_size: 1000,
  //     facets: facets.join(','),
  //   });
  // };

  /*
  Get Grant names. We might extract this query to "pages/summary.tsx" and just get all the facets we need that are unchanging in one spot. I use a similar query for Filters and will probably need the same for my viz.
  */

  // const { data, isLoading, error } = useQuery<
  //   FetchSearchResultsResponse | undefined,
  //   Error,
  //   SummaryQueryResponse | null
  // >(
  //   [
  //     'search-results',
  //     {
  //       q: queryString,
  //       facets,
  //     },
  //   ],
  //   () => queryFn(queryString),
  //   {
  //     refetchOnWindowFocus: false,
  //     select: d => {
  //       if (!d || !d.facets) {
  //         return null;
  //       }
  //       return {
  //         total: d.total,
  //         facets: {
  //           type: d.facets['@type'].terms || [],
  //           date: d.facets['date'].terms || [],
  //           dateModified: d.facets['dateModified'].terms || [],
  //           funder: d.facets['funding.funder.name'].terms || [],
  //           source: d.facets['includedInDataCatalog.name'].terms || [],
  //           infectiousAgent: d.facets['infectiousAgent.name'].terms || [],
  //           infectiousDisease: d.facets['infectiousDisease.name'].terms || [],
  //           measurementTechnique:
  //             d.facets['measurementTechnique.name'].terms || [],
  //         },
  //       };
  //     },
  //   },
  // );
  if (!hasMounted || !router.isReady) {
    return null;
  }
  const filter_tags = Object.entries({
    ...filters,
    date:
      filters.date && filters.date.length > 0
        ? [`${filters.date[0]} to ${filters.date[filters.date.length - 1]}`]
        : [],
  });

  return (
    <>
      <PageContainer
        hasNavigation
        title='Visual Summary'
        metaDescription='NDE Discovery Portal - Visual summary of query results.'
        disableSearchBar
      >
        {/* Header + search bar */}
        <section id='search-header'>
          <PageHeader
            title={'Visual Summary'}
            subtitle={'Search for datasets and gather insights.'}
            bgImg={`${assetPrefix}/assets/summary-bg-01.png`}
          >
            <>
              <SearchInput
                w='100%'
                isResponsive={false}
                colorScheme='secondary'
                ariaLabel='Search for grants, datasets or tools.'
                placeholder='Visualize your search'
                value={searchTerm}
                handleChange={handleChange}
                handleSubmit={e => {
                  e.preventDefault();
                  setQueryString(searchTerm.trim());
                }}
              />
              <Flex mt={2} flexWrap={['wrap']}>
                <Text color='whiteAlpha.800' mr={2}>
                  Try:
                </Text>
                {suggestedQueries.map((query, i) => {
                  return (
                    <SearchQueryLink
                      key={i}
                      title={query.title}
                      onClick={() => {
                        const str = queryFilterObject2String({
                          'funding.identifier': query['funding.identifier'],
                        });
                        if (str) {
                          setQueryString(str);
                        }
                      }}
                    />
                  );
                })}
              </Flex>
            </>
          </PageHeader>
        </section>
        <section id='search-filters'>
          <PageContent minH='unset' bg='white'>
            {/* Filters */}
            <Box w='100%'>
              <Flex>
                {Object.values(filters).flat().length > 0 && (
                  <FilterTags
                    tags={filter_tags}
                    removeAllFilters={() => removeAllFilters()}
                    removeSelectedFilter={(
                      name: string,
                      value: string | number,
                    ) => {
                      let updatedFilter = {
                        [name]: filters[name].filter(v => v !== value),
                      };
                      // If date is removed we set the value to an empty array.
                      if (name === 'date') {
                        updatedFilter = { [name]: [] };
                      }
                      updateFilters(updatedFilter);
                    }}
                  />
                )}
              </Flex>
              <Filters
                queryString={queryString}
                filters={filters}
                facets={Object.keys(filtersConfig).join(',')}
                handleSelectedFilters={updateFilters}
              />
            </Box>
          </PageContent>
        </section>

        {/* Visualizations */}
        {/* <section id='data-visualizations'>
          <DylanVis
            queryString={queryString}
            filters={filters}
            updateFilters={updateFilters}
          />
        </section> */}

        {/* Zoomable network */}
        <Box w='100%' bg='tertiary.900'>
          <Network
            queryString={queryString}
            filters={filters}
            updateFilters={updateFilters}
            removeAllFilters={() => removeAllFilters()}
          />
        </Box>

        {/* SummaryTable */}
        <section id='datasets-table'>
          <PageContent>
            <SummaryTable queryString={queryString} filters={filters} />
          </PageContent>
        </section>
      </PageContainer>
    </>
  );
};

export default SummaryPage;
