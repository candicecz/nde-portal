import React from 'react';
import { useRouter } from 'next/router';
import { FormattedResource } from 'src/utils/api/types';
import { Box, Divider, Flex, Skeleton, Tag, Text } from 'nde-design-system';
import {
  ResourceDates,
  ResourceHeader,
  ResourceOverview,
  ResourceLinks,
  ResourceProvenance,
  Section,
} from './components';

import { Route } from './helpers';
import FilesTable from './components/files-table';
import FundingTable from './components/funding-table';
import CitedByTable from './components/cited-by-table';
import { DisplayHTMLContent } from '../html-content';
import { DownloadMetadata } from '../download-metadata';
import BasedOn from './components/based-on';

// Metadata displayed in each section
export const section_metadata: { [key: string]: (keyof FormattedResource)[] } =
  {
    overview: [
      'citation',
      'doi',
      'healthCondition',
      'infectiousAgent',
      'inLanguage',
      'license',
      'measurementTechnique',
      'nctid',
      'numberOfDownloads',
      'numberOfViews',
      'spatialCoverage',
      'species',
      'temporalCoverage',
      'topic',
      'variableMeasured',
    ],
    keywords: ['keywords'],
    description: ['description'],
    provenance: ['includedInDataCatalog', 'url'],
    downloads: ['distribution'],
    funding: ['funding'],
    isBasedOn: ['isBasedOn'],
    citedBy: ['citedBy'],
    metadata: ['rawData'],
  };

// use config file to show content in sections.
const Sections = ({
  isLoading,
  data,
  sections,
}: {
  isLoading: boolean;
  data?: FormattedResource;
  sections: Route[];
}) => {
  const router = useRouter();

  return (
    <>
      <Section id={'header'} p={0}>
        <ResourceHeader
          isLoading={isLoading}
          conditionsOfAccess={data?.conditionsOfAccess}
          author={data?.author}
          name={data?.name}
          alternateName={data?.alternateName}
          isAvailableForFree={data?.isAvailableForFree}
        />
        {/* Banner showing data type and publish date. */}
        <ResourceDates data={data} />
      </Section>

      {sections.map(section => {
        if (section.hash === 'isBasedOn' && !data?.isBasedOn) {
          return <></>;
        }
        return (
          <Section
            id={section.hash}
            key={section.hash}
            name={section.title}
            isLoading={isLoading}
            isCollapsible={section.isCollapsible}
          >
            {section.hash === 'overview' && (
              <ResourceOverview isLoading={isLoading} {...data} />
            )}
            {section.hash === 'overview' && (
              <Box display={{ base: 'block', lg: 'none' }}>
                <ResourceLinks
                  isLoading={isLoading}
                  includedInDataCatalog={data?.includedInDataCatalog}
                  url={data?.url}
                  mainEntityOfPage={data?.mainEntityOfPage}
                  codeRepository={data?.codeRepository}
                />
              </Box>
            )}
            {/* Show keywords */}
            {section.hash === 'keywords' && (
              <Skeleton isLoaded={!isLoading}>
                <Flex flexWrap='wrap'>
                  {data?.keywords &&
                    data.keywords.map(keyword => {
                      return (
                        <Tag
                          as='a'
                          key={keyword}
                          m={2}
                          colorScheme='primary'
                          cursor='pointer'
                          onClick={e => {
                            e.preventDefault();
                            router.push({
                              pathname: `/search`,
                              query: { q: keyword.trim() },
                            });
                          }}
                        >
                          {keyword}
                        </Tag>
                      );
                    })}
                </Flex>
              </Skeleton>
            )}
            {/* Show description */}
            {section.hash === 'description' &&
              (data?.description || data?.abstract) && (
                <>
                  {/* Abstract text */}
                  {data.abstract && (
                    <>
                      <DisplayHTMLContent
                        content={`**Abstract:** ${data.abstract}` || ''}
                        overflow='auto'
                      />
                      <Divider my={2} />
                    </>
                  )}

                  {/* Description text */}
                  {data.description && (
                    <DisplayHTMLContent
                      content={`${data.description}` || ''}
                      overflow='auto'
                    />
                  )}
                </>
              )}

            {/* Show provenance */}
            {section.hash === 'provenance' && (
              <ResourceProvenance isLoading={isLoading} {...data} />
            )}

            {/* Show downloads */}
            {section.hash === 'downloads' && (
              <FilesTable isLoading={isLoading} {...data} />
            )}

            {/* Based On */}
            {section.hash === 'isBasedOn' && <BasedOn isLoading={isLoading} />}

            {/* Show funding */}
            {section.hash === 'funding' && (
              <FundingTable isLoading={isLoading} {...data} />
            )}

            {/* Show citedBy */}
            {section.hash === 'citedBy' && (
              <CitedByTable isLoading={isLoading} {...data} />
            )}

            {/* Show raw metadata */}
            {section.hash === 'metadata' && data?.rawData && (
              <>
                <Flex w='100%' justifyContent='flex-end' pb={4}>
                  <DownloadMetadata
                    loadMetadata={async () => await data.rawData}
                    colorScheme='secondary'
                    exportName={data.rawData['_id']}
                  >
                    Download Metadata
                  </DownloadMetadata>
                </Flex>
                <Box
                  maxHeight={500}
                  overflow='auto'
                  w='100%'
                  tabIndex={0}
                  borderY='2px solid'
                  borderColor='page.alt'
                >
                  <pre
                    style={{
                      whiteSpace: 'pre-wrap',
                      padding: '2rem',
                    }}
                  >
                    <Text fontSize='10px'>
                      {JSON.stringify(data.rawData, null, 2)}
                    </Text>
                  </pre>
                </Box>
              </>
            )}
          </Section>
        );
      })}
    </>
  );
};

export default Sections;
