import axios from 'axios';
import { MetadataSource } from 'src/utils/api/types';

interface fetchSourcesArgs {
  sourcePath: string;
  id: MetadataSource['sourceInfo']['identifier'];
  name: MetadataSource['sourceInfo']['name'];
  description: MetadataSource['sourceInfo']['description'];
  dateModified: MetadataSource['version'];
  numberOfRecords: number;
  schema: MetadataSource['sourceInfo']['schema'];
  url: MetadataSource['sourceInfo']['url'];
}

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

export const fetchSources = async ({
  sourcePath,
  ...props
}: fetchSourcesArgs) => {
  if (!sourcePath) {
    return null;
  }

  try {
    const response = await axios.get(`${process.env.BASE_URL}/api/gh`, {
      params: {
        url: '/repos/{owner}/{repo}/commits?path={path}',
        owner: 'NIAID-Data-Ecosystem',
        repo: 'nde-crawlers',
        path: 'biothings-hub/files/nde-hub/hub/dataload/sources/immport/uploader.py',
      },
    });

    const { data } = response.data;

    const dates: string[] = [];
    data.forEach((jsonObj: { commit: { author: { date: string } } }) => {
      dates.push(jsonObj.commit.author.date);
    });
    return { ...props, dateCreated: dates[dates.length - 1] };
  } catch (err) {
    throw err;
  }
};
