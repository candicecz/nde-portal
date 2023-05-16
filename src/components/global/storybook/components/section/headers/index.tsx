import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

interface SectionHeader {
  size?: string;
  as?: any;
}

export const SectionHeader: React.FC<SectionHeader> = ({
  as,
  size,
  children,
}) => {
  return (
    <Box px={[4, 6]} py={[6, 8, 10]} borderRadius={'sm'} bg={'page.alt'} my={4}>
      <Heading as={as || 'h3'} size={size || 'h3'} fontFamily={'body'}>
        {children}
      </Heading>
    </Box>
  );
};

export const SectionTitle: React.FC<SectionHeader> = ({
  as,
  size,
  children,
}) => {
  return (
    <Box py={[4]} borderRadius={'sm'}>
      <Heading
        as={as || 'h4'}
        size={size || 'h4'}
        fontFamily={'body'}
        fontWeight={'normal'}
      >
        {children}
      </Heading>
    </Box>
  );
};
