import React from 'react';
import { Metadata } from 'src/utils/api/types';
import { formatDate } from 'src/utils/helpers';
import { Box, Heading, ListItem, Text } from 'nde-design-system';

interface Sidebar {
  data: Metadata;
}

const Sidebar: React.FC<Sidebar> = ({ data }) => {
  const sourceNames = [];

  for (const source in data.src) {
    sourceNames.push([data.src[source].sourceInfo.name, source]);
  }

  sourceNames.sort((a, b) => a[0].localeCompare(b[0]));

  return (
    <>
      {sourceNames.map((name, index) => {
        return (
          <ListItem
            key={index}
            px={[2, 4, 6]}
            py={4}
            _hover={{ bg: 'gray.50' }}
            cursor='pointer'
          >
            <Box
              as='a'
              href={`#${name[0]}`}
              aria-label={`Go to ${name[0]} section`}
            >
              <Heading size='h6'>
                {name[0]} <br />
              </Heading>
              <Text fontWeight='medium' fontSize='sm'>
                Latest Release {formatDate(data.src[name[1]].version, true)}
              </Text>
            </Box>
          </ListItem>
        );
      })}
    </>
  );
};

export default Sidebar;
