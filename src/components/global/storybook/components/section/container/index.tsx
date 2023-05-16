import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

interface Container extends BoxProps {}

export const PageContainer: React.FC<Container> = ({ children }) => {
  return (
    <Box px={[4, 6]} py={[2, 4]} bg='page.bg' maxWidth={1000} margin='0 auto'>
      {children}
    </Box>
  );
};

export const SectionContainer: React.FC<Container> = ({
  children,
  ...rest
}) => {
  return (
    <Box
      px={[4, 6]}
      py={[2, 4]}
      borderRadius={'md'}
      border={'1px'}
      borderColor={'gray.200'}
      bg={'page.bg'}
      {...rest}
    >
      {children}
    </Box>
  );
};
