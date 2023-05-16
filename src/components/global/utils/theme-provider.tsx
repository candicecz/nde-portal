import React from 'react';
import { ChakraProvider, ChakraProviderProps } from '@chakra-ui/react';
import { theme } from 'src/components/global';

interface ThemeProviderProps extends ChakraProviderProps {}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  ...props
}) => {
  return (
    <>
      <ChakraProvider theme={theme} {...props}>
        {children}
      </ChakraProvider>
    </>
  );
};
