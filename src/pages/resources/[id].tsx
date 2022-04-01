import React, {useEffect} from 'react';
import type {NextPage} from 'next';
import {PageContainer, PageContent} from 'src/components/page-container';
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
  Icon,
  Skeleton,
  Tag,
  Text,
  useBreakpointValue,
} from 'nde-design-system';
import {
  ResourceHeader,
  ResourceOverview,
  ResourceTabs,
  ResourceLinks,
  ResourceFilesTable,
  ResourceProvenance,
  Section,
} from 'src/components/resource';
import {FaRegClock} from 'react-icons/fa';
import Script from 'next/script';
import {StyledBanner} from 'src/components/search-results/components/card';
import {formatDate} from 'src/utils/helpers';
import ErrorMessage from 'src/components/error';

const Dataset: NextPage = props => {
  const router = useRouter();
  const {id} = router.query;

  // Check if mobile
  const isMobile = useBreakpointValue({base: true, md: false});

  // Access query client
  const {isLoading, error, data} = useQuery<
    FormattedResource | undefined,
    Error
  >(['search-result', {id}], () => getResourceById(id));

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
        title='Dataset'
        metaDescription='Selected search result page.'
      >
        <PageContent>
          {error ? (
            // [ERROR STATE]: API response error
            <ErrorMessage message="It's possible that the server is experiencing some issues.">
              <ButtonGroup>
                <Button onClick={() => router.reload()} variant='outline'>
                  Retry
                </Button>
                <Button as='a' href='/'>
                  Back to Home
                </Button>
              </ButtonGroup>
            </ErrorMessage>
          ) : !isLoading && !data ? (
            // [EMPTY STATE]: No Results
            <Card w='100%'>
              <Empty
                message='No data available.'
                imageUrl='/assets/empty.png'
                imageAlt='Missing information icon.'
                alignSelf='center'
                h={'50vh'}
              >
                <Text>
                  No information about this dataset is available, please try
                  again.
                </Text>
                <Button as={'a'} href='/' mt={4}>
                  Go to home page.
                </Button>
              </Empty>
            </Card>
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
                      datePublished={data?.datePublished}
                      citation={data?.citation}
                      name={data?.name}
                    />
                    {/* Banner showing data type and publish date. */}
                    <StyledBanner
                      overflowY='hidden'
                      w='100%'
                      name={data?.type}
                      my={0}
                    >
                      {data?.datePublished && (
                        <Flex alignItems={'center'}>
                          <Icon as={FaRegClock} mr={2}></Icon>
                          <Text fontSize={'xs'} fontWeight={'semibold'}>
                            Published on {formatDate(data.datePublished)}
                          </Text>
                        </Flex>
                      )}
                    </StyledBanner>

                    {isMobile && (
                      <ResourceLinks
                        isLoading={isLoading}
                        includedInDataCatalog={data?.includedInDataCatalog}
                      />
                    )}
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
                  {/* Show metadata + description*/}
                  <Section id='description' name={'Description'}>
                    <ResourceTabs
                      isLoading={isLoading}
                      description={data?.description}
                      metadata={data?.rawData}
                    />
                  </Section>

                  {/* Show all available downloads */}
                  <Section id='files' name={'Files'}>
                    <ResourceFilesTable
                      isLoading={true}
                      distribution={data?.distribution}
                    />
                  </Section>
                  <Section id='provenance' name={'Provenance'}>
                    <ResourceProvenance
                      isLoading={isLoading}
                      includedInDataCatalog={data?.includedInDataCatalog}
                    />
                  </Section>
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

export default Dataset;
