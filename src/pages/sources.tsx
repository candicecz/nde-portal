import type { NextPage } from 'next';
import React from 'react';
import { Flex, Text, UnorderedList } from 'nde-design-system';
import { PageContainer, PageContent } from 'src/components/page-container';
import { Main, Sidebar } from 'src/components/sources';
import { fetchMetadata } from 'src/utils/api';
import { Error } from 'src/components/error';
import { useRouter } from 'next/router';
import axios from 'axios';
import { MetadataSource } from 'src/utils/api/types';

export interface SourceResponse {
  dateCreated: string;
  id: MetadataSource['sourceInfo']['identifier'];
  name: MetadataSource['sourceInfo']['name'];
  description: MetadataSource['sourceInfo']['description'];
  dateModified: MetadataSource['version'];
  numberOfRecords: number;
  schema: MetadataSource['sourceInfo']['schema'];
  url: MetadataSource['sourceInfo']['url'];
}

interface SourcesProps {
  data: SourceResponse[];
  error: { status: number; message: string; type: string } | null;
  children: any;
}
const Sources: NextPage<SourcesProps> = ({ data, error }) => {
  const router = useRouter();
  // Fetch metadata stats from API.
  return (
    <PageContainer
      id='sources-page'
      hasNavigation
      title='Sources'
      metaDescription='NDE Discovery Portal - API data sources.'
      px={0}
      py={0}
      disableSearchBar
    >
      <Flex>
        {error && (
          <Error>
            <Flex flexDirection='column' alignItems='center'>
              <Text textTransform='capitalize'>
                {error?.message ||
                  'It’s possible that the server is experiencing some issues.'}{' '}
              </Text>
            </Flex>
          </Error>
        )}
        {!error && data && (
          <>
            <Flex
              flexDirection='column'
              bg='page.alt'
              d={['none', 'none', 'flex']}
              w='50%'
              as='nav'
              aria-label='Navigation for data sources.'
              maxW='450px'
            >
              <UnorderedList
                display='flex'
                flexDirection='column'
                py={4}
                top={0}
                ml={0}
              >
                <Sidebar data={data} />
              </UnorderedList>
            </Flex>
            <PageContent w='100%' flexDirection='column' bg='#fff'>
              <Main data={data} />
            </PageContent>
          </>
        )}
      </Flex>
    </PageContainer>
  );
};

export async function getStaticProps() {
  const fetchRepositoryInfo = async (sourceData: any) => {
    try {
      const data = await Promise.all(
        sourceData.map(async ([k, source]: [string, any]) => {
          const sourceData = {
            id: (source.sourceInfo && source.sourceInfo.identifier) || k,
            sourcePath: source?.code?.file || null,
            name: (source.sourceInfo && source.sourceInfo.name) || k,
            description:
              (source.sourceInfo && source.sourceInfo.description) || '',
            dateModified: source.version || '',
            numberOfRecords: source.stats[k] || 0,
            schema: (source.sourceInfo && source.sourceInfo.schema) || null,
            url: (source.sourceInfo && source.sourceInfo.url) || '',
          };
          if (!sourceData.sourcePath) {
            return sourceData;
          }

          // Fetch source information from github
          try {
            const url = `https://api.github.com/repos/NIAID-Data-Ecosystem/nde-crawlers/commits`;
            const response = await axios.get(url, {
              headers: {
                Authorization: `Bearer ${process.env.GITHUB_API_KEY}`,
                'Content-Type': 'application/json',
              },
              params: {
                url: '/repos/{owner}/{repo}/commits?path={path}',
                owner: 'NIAID-Data-Ecosystem',
                repo: 'nde-crawlers',
                path: 'biothings-hub/files/nde-hub/hub/dataload/sources/immport/uploader.py',
              },
            });
            const data = await response.data;
            const dates: string[] = [];
            if (data) {
              data.forEach(
                (jsonObj: { commit: { author: { date: string } } }) => {
                  dates.push(jsonObj.commit.author.date);
                },
              );
            }

            return { ...sourceData, dateCreated: dates[dates.length - 1] };
          } catch (err) {
            throw err;
          }
        }),
      );
      return { error: null, data };
    } catch (err: any) {
      return {
        data: [],
        error: {
          type: 'error',
          status: err.response.status,
          message: err.response.statusText,
        },
      };
    }
  };
  const sources = await fetchMetadata();
  const sourceData = await fetchRepositoryInfo(Object.entries(sources.src));
  return { props: { ...sourceData } };
}

export default Sources;
