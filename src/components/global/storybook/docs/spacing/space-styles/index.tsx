import React from 'react';
import { Box } from '@chakra-ui/react';
import { theme } from 'src/components/global';
import { VisualDescription } from 'global/storybook/components/visual-description';

/**
 * Showcase for different space sizing in theme.
 */

interface SpaceStyles {}

export const SpaceStyles: React.FC<SpaceStyles> = () => {
  const { space } = theme;
  const spacings = Object.entries(space)
    .sort((a, b) => {
      return a[0].localeCompare(b[0], undefined, { numeric: true });
    })
    .filter(s => s[0] !== 'px');

  return (
    <>
      {spacings.map(([key, spaceValue], i) => {
        return (
          <Box key={key} px={4} py={2} bg={i % 2 ? 'page.alt' : 'page.bg'}>
            <VisualDescription
              title={`theme.space.${key}`}
              description={`space: ${spaceValue}`}
            >
              <Box pr={key} h={4} bg={'pink.200'} mr={2}></Box>
            </VisualDescription>
          </Box>
        );
      })}
    </>
  );
};
