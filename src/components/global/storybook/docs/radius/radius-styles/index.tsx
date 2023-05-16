import React from 'react';
import { SimpleGrid, Flex } from '@chakra-ui/react';
import { VisualDescription } from 'global/storybook/components/visual-description';
import ThemeRadii from 'src/components/global/foundations/radius';

/**
 * Showcase for different space sizing in theme.
 */

export const RadiusStyles: React.FC = () => {
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
      {Object.entries(ThemeRadii).map(([radius, remValue]) => {
        return (
          <VisualDescription key={radius} title={`theme.radii.${radius}`}>
            <Flex
              flexDir={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              p='6'
              bg='white'
              w={'8rem'}
              h={'8rem'}
              borderRadius={radius}
              border={'4px solid black'}
            >
              <strong>{radius}</strong>
              {remValue}
            </Flex>
          </VisualDescription>
        );
      })}
    </SimpleGrid>
  );
};
