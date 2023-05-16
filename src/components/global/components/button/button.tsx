import React from 'react';
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
  forwardRef,
  Link,
  Icon,
} from '@chakra-ui/react';
import { FaExternalLinkAlt } from 'react-icons/fa';

export interface ButtonProps extends ChakraButtonProps {
  href?: string;
  isExternal?: boolean;
  target?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button = forwardRef<ButtonProps, 'button'>(
  ({ children, isExternal, href, ...props }, ref) => {
    if (href) {
      return (
        <ChakraButton
          as={Link}
          ref={ref}
          href={href}
          isExternal={isExternal}
          {...props}
        >
          {children}
          {isExternal && (
            <Icon as={FaExternalLinkAlt} boxSize={4} ml={2}></Icon>
          )}
        </ChakraButton>
      );
    }
    return (
      <ChakraButton ref={ref} {...props}>
        {children}
      </ChakraButton>
    );
  },
);
