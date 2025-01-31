import { useState } from 'react';
import type { NextPage } from 'next';
import {
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from 'nde-design-system';
import {
  PageHeader,
  PageContainer,
  PageContent,
  SearchQueryLink,
} from 'src/components/page-container';
import { useRouter } from 'next/router';
import homepageCopy from 'configs/homepage.json';
import { fetchSearchResults } from 'src/utils/api';
import { useQuery } from 'react-query';
import { FetchSearchResultsResponse } from 'src/utils/api/types';
import LoadingSpinner from 'src/components/loading';
import { formatNumber } from 'src/utils/helpers';
import {
  StyledSection,
  StyledSectionHeading,
  StyledText,
  StyledBody,
  StyledSectionButtonGroup,
  PieChart,
  Legend,
} from 'src/components/pie-chart';
import { assetPrefix } from 'next.config';
import NextLink from 'next/link';
import { AdvancedSearch } from 'src/components/advanced-search';
import { SearchBarWithDropdown } from 'src/components/search-bar';

const sample_queries = [
  {
    title: 'Asthma',
    searchTerms: ['"Asthma"'],
  },
  {
    title: 'COVID-19',
    searchTerms: [
      '"SARS-CoV-2"',
      '"Covid-19"',
      '"Wuhan coronavirus"',
      '"Wuhan pneumonia"',
      '"2019-nCoV"',
      '"HCoV-19"',
    ],
  },
  {
    title: 'HIV/AIDS',
    searchTerms: ['"HIV"', '"AIDS"'],
  },
  { title: 'Influenza', searchTerms: ['"Influenza"', '"Flu"'] },
  {
    title: 'Malaria',
    searchTerms: [
      '"Malaria"',
      '"Plasmodium falciparum"',
      '"Plasmodium malariae"',
      '"Plasmodium ovale curtisi"',
      '"Plasmodium ovale wallikeri"',
      '"Plasmodium vivax"',
      '"Plasmodium knowlesi"',
    ],
  },
  {
    title: 'Tuberculosis',
    searchTerms: [
      '"Tuberculosis"',
      '"Mycobacterium bovis"',
      '"Mycobacterium africanum"',
      '"Mycobacterium canetti"',
      '"Mycobacterium microti"',
      '"Phthisis"',
    ],
  },
];

const Home: NextPage = () => {
  const router = useRouter();
  const size = useBreakpointValue({ base: 300, lg: 350 });

  // Search term entered in search bar
  const [searchTerm, setSearchTerm] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setSearchTerm(e.target.value);

  // update value when changed
  // useEffect(() => setSearchTerm(value || ''), [value]);

  // Fetch stats about number of resources
  const params = {
    q: '__all__',
    size: 0,
    facets: [
      '@type',
      'measurementTechnique.name',
      'includedInDataCatalog.name',
    ].join(','),
    facet_size: 20,
  };

  interface Stat {
    term: string;
    count: number;
    stats?: Stat[];
  }

  interface Stats {
    datasets: Stat | null;
    computationaltool: Stat | null;
    measurementTechnique: Stat | null;
    repositories: Stat | null;
  }

  const [stats, setStats] = useState<Stats>({
    datasets: null,
    computationaltool: null,
    measurementTechnique: null,
    repositories: null,
  });

  const { isLoading, error } = useQuery<
    FetchSearchResultsResponse | undefined,
    Error
  >({
    queryKey: ['stats', params],
    queryFn: () => fetchSearchResults(params),
    refetchOnWindowFocus: false,
    onSuccess: data => {
      let stat = { ...stats };
      if (data) {
        const { facets } = data;

        // Data types - we're interested in computationaltool and datasets.
        const types: { [key: string]: Stat } = facets['@type'].terms.reduce(
          (r: { [key: string]: Stat }, v: Stat) => {
            const key = v.term.toLowerCase();
            if (key === 'dataset' || key === 'computationaltool') {
              if (!r[`${key}`]) {
                r[`${key}`] = { term: '', count: 0 };
              }
              r[`${key}`].term =
                key === 'computationaltool' ? 'Tools' : 'Datasets';
              r[`${key}`].count += v.count;
            }
            return r;
          },
          {},
        );
        // Get number of measurement techniques
        const measurementTechnique = {
          term: 'Measurement techniques',
          count: facets['measurementTechnique.name'].total,
        };

        const sources = [...facets['includedInDataCatalog.name'].terms];

        // Get number of repositories
        const repositories = {
          term: 'Repositories',
          count: sources.length,
          stats: sources,
        };
        stat = {
          datasets: types.dataset,
          computationaltool: types.computationaltool,
          measurementTechnique,
          repositories,
        };
      }

      setStats(stat);
    },
  });
  return (
    <>
      <PageContainer
        hasNavigation
        title='Home'
        metaDescription='NIAID Data Ecosystem Discovery Portal - Home.'
        disableSearchBar
      >
        <PageHeader
          title={homepageCopy.sections[0].heading}
          subtitle={homepageCopy.sections[0].subtitle}
          body={[homepageCopy.sections[0].body]}
        >
          <>
            <Flex w='100%' justifyContent='flex-end' mb={2}>
              <AdvancedSearch
                buttonProps={{
                  variant: 'outline',
                  bg: 'whiteAlpha.500',
                  color: 'white',
                  _hover: { bg: 'whiteAlpha.800', color: 'primary.600' },
                }}
              />
            </Flex>
            <SearchBarWithDropdown
              ariaLabel='Search for datasets or tools'
              placeholder='Search for datasets or tools'
              size='md'
            />

            {/* [NOTE]: Test with autocomplete in the future */}
            {/* <SearchWithPredictiveText
              ariaLabel='Search for datasets or tools'
              placeholder='Search for datasets or tools'
              size='md'
              handleSubmit={(stringValue, __, data) => {
                if (data && data.id) {
                  router.push({
                    pathname: `/resources`,
                    query: { id: `${data.id}` },
                  });
                } else {
                  router.push({
                    pathname: `/search`,
                    query: { q: `${stringValue.trim()}` },
                  });
                }
              }}
            /> */}

            <Flex mt={2} flexWrap={['wrap']}>
              <Text color='whiteAlpha.800' mr={2}>
                Try:
              </Text>
              {sample_queries.map((query, i) => {
                return (
                  <NextLink
                    key={query.title}
                    href={{
                      pathname: `/search`,
                      query: { q: query.searchTerms.join(' OR ') },
                    }}
                    passHref
                  >
                    <SearchQueryLink
                      title={query.title}
                      display={[i > 2 ? 'none' : 'block', 'block']}
                    />
                  </NextLink>
                );
              })}
            </Flex>
          </>
        </PageHeader>

        {/* NIAID Data Ecosystem section */}
        <PageContent justifyContent='center' bg='white' minH='unset'>
          <StyledSection
            id='nde'
            alignItems='center'
            flexDirection='column'
            maxWidth={['100%', '100%', '750px']}
          >
            <StyledSectionHeading>
              {homepageCopy.sections[1].heading}
            </StyledSectionHeading>

            <StyledText
              textAlign={['start', 'center']}
              mt={4}
              fontSize={['lg', 'xl']}
              lineHeight='taller'
              maxW='unset'
            >
              {homepageCopy.sections[1].body}
            </StyledText>
            <StyledSectionButtonGroup variant='solid' justifyContent='center'>
              {homepageCopy.sections[1]?.routes &&
                homepageCopy.sections[1].routes.map(route => {
                  return (
                    <NextLink
                      key={route.title}
                      href={{
                        pathname: route.path,
                      }}
                      passHref
                    >
                      <Button w='100%' my={2}>
                        {route.title}
                      </Button>
                    </NextLink>
                  );
                })}
            </StyledSectionButtonGroup>
          </StyledSection>
        </PageContent>

        {/* Display stats about the Biothings API */}
        {!error && (
          <PageContent
            w='100%'
            bg='white'
            minH='unset'
            flexDirection='column'
            justifyContent='space-around'
            alignItems='center'
            py={[6, 10]}
          >
            <SimpleGrid
              columns={[1, 2, Object.values(stats).length]}
              w='100%'
              spacing={[6, 8, 4]}
            >
              {Object.values(stats).map((stat, i) => {
                return (
                  <LoadingSpinner key={i} isLoading={isLoading}>
                    {stat?.term && (
                      <Flex
                        alignItems='center'
                        flexDirection='column'
                        textAlign='center'
                      >
                        <Image
                          src={`${assetPrefix || ''}/assets/${stat.term
                            .toLowerCase()
                            .replaceAll(' ', '-')}.svg`}
                          alt={`Icon for ${stat.term}`}
                          boxSize='50px'
                          objectFit='contain'
                          mb={1}
                        />
                        <Heading size='md' fontWeight='bold' my={1}>
                          {formatNumber(stat.count)}
                        </Heading>
                        <Heading
                          size='xs'
                          fontWeight='medium'
                          lineHeight='shorter'
                        >
                          {stat.term}
                        </Heading>
                      </Flex>
                    )}
                  </LoadingSpinner>
                );
              })}
            </SimpleGrid>
          </PageContent>
        )}

        {/* Data repository viz section */}
        <PageContent
          bg='page.alt'
          minH='unset'
          flexDirection='column'
          alignItems='center'
        >
          <StyledSection
            id='explore-date'
            flexDirection={{ base: 'column', lg: 'column' }}
          >
            <Flex
              width='100%'
              flexDirection={{ base: 'column', lg: 'row' }}
              justifyContent={{ lg: 'space-between' }}
              alignItems='center'
              flex={1}
            >
              <LoadingSpinner isLoading={isLoading}>
                {/* Pie chart with number repositories and associated resources*/}
                {stats?.repositories?.stats && (
                  <PieChart
                    width={size || 200}
                    height={size || 200}
                    data={stats.repositories.stats.sort(
                      (a, b) => b.count - a.count,
                    )}
                  ></PieChart>
                )}
              </LoadingSpinner>
              {/* Legend display for smaller screen size */}
              <Flex
                display={{ base: 'flex', lg: 'none' }}
                w='100%'
                justifyContent='center'
              >
                {stats?.repositories?.stats && (
                  <Legend
                    data={stats.repositories.stats.sort(
                      (a, b) => b.count - a.count,
                    )}
                  ></Legend>
                )}
              </Flex>
              <StyledBody
                maxWidth={['unset', 'unset', '700px', '410px']}
                textAlign={['start', 'start', 'center', 'start']}
              >
                <StyledSectionHeading mt={[4, 6]}>
                  {homepageCopy.sections[2].heading}
                </StyledSectionHeading>
                <StyledText>{homepageCopy.sections[2].body}</StyledText>
                {homepageCopy.sections[2]?.routes &&
                  homepageCopy.sections[2].routes.map(
                    (route: {
                      title: string;
                      path: string;
                      isExternal?: boolean;
                    }) => {
                      return (
                        <StyledSectionButtonGroup
                          key={route.title}
                          justifyContent={[
                            'flex-start',
                            'flex-start',
                            'center',
                            'flex-start',
                          ]}
                        >
                          <NextLink href={route.path} passHref>
                            <Button w='100%' variant='outline'>
                              {route.title}
                            </Button>
                          </NextLink>
                        </StyledSectionButtonGroup>
                      );
                    },
                  )}
              </StyledBody>
            </Flex>

            {/* Legend display for larger screen size */}
            <Flex
              display={{ base: 'none', lg: 'flex' }}
              w='100%'
              justifyContent='center'
            >
              {stats?.repositories?.stats && (
                <Legend
                  data={stats.repositories.stats.sort(
                    (a, b) => b.count - a.count,
                  )}
                ></Legend>
              )}
            </Flex>
          </StyledSection>
        </PageContent>
      </PageContainer>
    </>
  );
};

export default Home;
