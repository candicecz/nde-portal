import React, {useEffect} from 'react';
import type {NextPage} from 'next';
import {
  PageContainer,
  PageContent,
  SearchBar,
} from 'src/components/page-container';
import {useRouter} from 'next/router';
import {useQuery} from 'react-query';
import {getResourceById} from 'src/utils/api';
import {FormattedResource} from 'src/utils/api/types';
import Empty from 'src/components/empty';
import {ButtonGroup} from '@chakra-ui/button';
import {
  Box,
  Button,
  Card,
  Flex,
  Skeleton,
  Tag,
  Text,
  useBreakpointValue,
} from 'nde-design-system';
import {
  ResourceHeader,
  ResourceOverview,
  ResourceLinks,
  ResourceFilesTable,
  ResourceProvenance,
  Section,
  TypeBanner,
} from 'src/components/resource';
import ErrorMessage from 'src/components/error';
import {VscJson} from 'react-icons/vsc';
import {GrTextAlignFull} from 'react-icons/gr';
import {FaDatabase, FaDownload, FaRegMoneyBillAlt} from 'react-icons/fa';
import {BsBlockquoteLeft} from 'react-icons/bs';

// Error display is data fetching goes wrong.
const ErrorState = ({retryFn}: {retryFn: () => void}) => {
  return (
    <ErrorMessage message="It's possible that the server is experiencing some issues.">
      <ButtonGroup>
        <Button onClick={() => retryFn()} variant='outline'>
          Retry
        </Button>
        <Button as='a' href='/'>
          Back to Home
        </Button>
      </ButtonGroup>
    </ErrorMessage>
  );
};

// Displays empty message when no data exists.
const EmptyState = () => {
  return (
    <Card w='100%'>
      <Empty
        message='No data available.'
        imageUrl='/assets/empty.png'
        imageAlt='Missing information icon.'
        alignSelf='center'
        h='50vh'
      >
        <Text>No information about this dataset is available.</Text>
        <Button as={'a'} href='/' mt={4}>
          Go to search.
        </Button>
      </Empty>
    </Card>
  );
};
const ResourcePage: NextPage = props => {
  const router = useRouter();
  const {id} = router.query;

  // Check if mobile
  const isMobile = useBreakpointValue({base: true, md: false});

  // Access query client
  const {isLoading, error, data} = useQuery<
    FormattedResource | undefined,
    Error
  >(['search-result', {id}], () => getResourceById(id), {
    refetchOnWindowFocus: false,
  });

  // embed metadata
  useEffect(() => {
    if (data && data.rawData) {
      let script_tag = document.createElement('script');
      let metadata = JSON.stringify(data.rawData, null, 2);
      script_tag.setAttribute('type', 'application/ld+json');
      script_tag.text = metadata;
      document.head.appendChild(script_tag);
    }
  }, [data]);

  // embed altmetric data. For more information: https://api.altmetric.com/embeds.html
  useEffect(() => {
    // @ts-ignore
    if (window._altmetric_embed_init) {
      // @ts-ignore
      window._altmetric_embed_init();
    } else {
      /* import altmetric script for badge embeds */
      let altmetricsScript = document.createElement('script');
      altmetricsScript.setAttribute(
        'src',
        'https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js',
      );
      document.body.appendChild(altmetricsScript);
    }
  }, [data]);

  if (!id) {
    return <></>;
  }
  return (
    <>
      <PageContainer
        hasNavigation
        title='Resource'
        metaDescription='Selected search result page.'
      >
        <SearchBar
          value={router.query.q || ''}
          ariaLabel='Search for datasets or tools'
        />
        <PageContent>
          {error ? (
            // [ERROR STATE]: API response error
            <ErrorState retryFn={() => router.reload()} />
          ) : !isLoading && !data ? (
            // [EMPTY STATE]: No Results
            <EmptyState />
          ) : (
            <Flex w='100%' h='100%' flexDirection='column' minW={300}>
              <Flex
                height='100%'
                p={2}
                flexDirection={['column', 'column', 'row']}
              >
                <Card
                  flex={3}
                  p={0}
                  width='100%'
                  sx={{'>*': {p: 0}}}
                  minW={500}
                >
                  <Section id={'header'} p={0}>
                    <ResourceHeader
                      isLoading={isLoading}
                      conditionsOfAccess={data?.conditionsOfAccess}
                      author={data?.author}
                      citation={data?.citation}
                      name={data?.name}
                    />
                    {/* Banner showing data type and publish date. */}
                    <TypeBanner
                      type={data?.type}
                      datePublished={data?.datePublished}
                    />
                  </Section>
                  {/* <Navigation resourceType={data?.type} /> */}
                  <Section id='overview'>
                    <ResourceOverview
                      isLoading={isLoading}
                      doi={data?.doi}
                      keywords={data?.keywords}
                      language={data?.language}
                      license={data?.license}
                      numberOfDownloads={data?.numberOfDownloads}
                      numberOfViews={data?.numberOfViews}
                      spatialCoverage={data?.spatialCoverage}
                      temporalCoverage={data?.temporalCoverage}
                      citation={data?.citation}
                      variableMeasured={data?.variableMeasured}
                      measurementTechnique={data?.measurementTechnique}
                      species={data?.species}
                    />
                    {isMobile && (
                      <ResourceLinks
                        isLoading={isLoading}
                        includedInDataCatalog={data?.includedInDataCatalog}
                      />
                    )}
                  </Section>
                  {data?.keywords && data?.keywords.length > 0 && (
                    <Section id={'keywords'} name={'Keywords'}>
                      <Skeleton isLoaded={!isLoading}>
                        <Flex flexWrap='wrap'>
                          {data.keywords &&
                            data.keywords.map(keyword => {
                              return (
                                <Tag key={keyword} m={2} colorScheme='primary'>
                                  {keyword}
                                </Tag>
                              );
                            })}
                        </Flex>
                      </Skeleton>
                    </Section>
                  )}
                  {/* Show description*/}
                  <Section
                    id='description'
                    name={'Description'}
                    isCollapsible
                    icon={GrTextAlignFull}
                    isLoading={isLoading}
                  >
                    {data?.description && (
                      <Box
                        overflow={'auto'}
                        w='100%'
                        fontSize={'sm'}
                        dangerouslySetInnerHTML={{
                          __html: data.description,
                        }}
                      ></Box>
                    )}
                  </Section>

                  {/* Show metadata*/}
                  <Section
                    id='metadata'
                    name={'Metadata'}
                    isCollapsible
                    icon={VscJson}
                    isLoading={isLoading}
                  >
                    {data?.rawData && (
                      <Box maxHeight={500} overflow='auto' w='100%'>
                        <pre
                          style={{
                            whiteSpace: 'pre-wrap',
                            padding: '2rem',
                          }}
                        >
                          <Text fontSize={'10px'}>
                            {JSON.stringify(data.rawData, null, 2)}
                          </Text>
                        </pre>
                      </Box>
                    )}
                  </Section>

                  {/* Show where the data is retrieved from. */}
                  <Section
                    id='provenance'
                    name={'Provenance'}
                    isCollapsible
                    icon={FaDatabase}
                  >
                    <ResourceProvenance
                      isLoading={isLoading}
                      includedInDataCatalog={data?.includedInDataCatalog}
                    />
                  </Section>

                  {/* Show all available downloads */}
                  <Section
                    id='downloads'
                    name={'File Downloads'}
                    isCollapsible
                    icon={FaDownload}
                  >
                    <ResourceFilesTable
                      isLoading={true}
                      distribution={data?.distribution}
                    />
                  </Section>

                  {/* Show where funding is from */}
                  <Section
                    id='funding'
                    name={'Funding'}
                    isCollapsible
                    icon={FaRegMoneyBillAlt}
                  >
                    <ResourceFilesTable
                      isLoading={true}
                      // @ts-ignore
                      // [TO DO ]: create genric table component.
                      distribution={data?.funding?.map(f => f.funder)}
                    />
                  </Section>

                  {/* Where has the resource been cited */}
                  {data?.citedBy && (
                    <Section
                      id='citedBy'
                      name={'Cited By'}
                      isCollapsible
                      icon={BsBlockquoteLeft}
                    >
                      <ResourceFilesTable
                        isLoading={true}
                        // @ts-ignore
                        // [TO DO ]: create genric table component.
                        distribution={data?.citedBy?.map(c => {
                          return {
                            doi: c.doi,
                            name: c.name,
                            pmid: c.pmid,
                            url: c.url,
                          };
                        })}
                      />
                    </Section>
                  )}
                </Card>
                <Card
                  flex={1}
                  ml={[0, 0, 4]}
                  my={[2, 2, 0]}
                  p={0}
                  minW='300px'
                  sx={{'>*': {p: 0}}}
                  position={'sticky'}
                  top={'80px'}
                  w={'100%'}
                  h={'100%'}
                >
                  <Box>
                    {/* Show external links in header when on mobile */}
                    {!isMobile && (
                      <ResourceLinks
                        isLoading={isLoading}
                        includedInDataCatalog={data?.includedInDataCatalog}
                      />
                    )}
                    {/* <RelatedDatasets /> */}
                  </Box>
                </Card>
              </Flex>
            </Flex>
          )}
        </PageContent>
      </PageContainer>
    </>
  );
};

export default ResourcePage;
