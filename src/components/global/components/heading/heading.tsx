import React from 'react';
import {
  Heading as ChakraHeading,
  HeadingProps as ChakraHeadingProps,
} from '@chakra-ui/react';

export interface HeadingProps extends ChakraHeadingProps {
  color?: string;
}

export const Heading: React.FC<HeadingProps> = ({ children, ...props }) => {
  return <ChakraHeading {...props}>{children}</ChakraHeading>;
};
