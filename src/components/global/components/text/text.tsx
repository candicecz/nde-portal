import React from 'react';
import {
  Text as ChakraText,
  TextProps as ChakraTextProps,
  TypographyProps,
} from '@chakra-ui/react';

export interface TextProps extends ChakraTextProps, TypographyProps {
  color?: string;
}

export const Text: React.FC<TextProps> = ({ children, ...props }) => {
  return <ChakraText {...props}>{children}</ChakraText>;
};
