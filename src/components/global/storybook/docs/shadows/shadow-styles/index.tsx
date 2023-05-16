import React from 'react';
import { SimpleGrid, Box } from '@chakra-ui/react';
import { VisualDescription } from 'global/storybook/components/visual-description';
import CustomThemeShadows from 'src/components/global/foundations/shadows';

/**
 * Showcase for different shadows in theme.
 */

export const ShadowStyles: React.FC = () => {
  const shadowKeys = Object.keys(CustomThemeShadows);

  return (
    <SimpleGrid
      bg='page.alt'
      columns={{ sm: 1, md: 2 }}
      spacing='8'
      p='10'
      textAlign='center'
      rounded='lg'
      color='text.body'
    >
      {shadowKeys.map(shadowKey => {
        return (
          <VisualDescription
            key={shadowKey}
            title={`theme.shadows.${shadowKey}`}
          >
            <Box p='6' rounded='md' bg='white' boxShadow={shadowKey}>
              {shadowKey}
            </Box>
          </VisualDescription>
        );
      })}
    </SimpleGrid>
  );
};
