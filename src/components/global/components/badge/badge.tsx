import React from 'react';
import {
  Badge as ChakraBadge,
  BadgeProps as ChakraBadgeProps,
} from '@chakra-ui/react';

export interface BadgeProps extends ChakraBadgeProps {}

/**
 * Regular Badge
 */
export const Badge: React.FC<BadgeProps> = ({
  children,
  colorScheme,
  ...props
}) => {
  return (
    <ChakraBadge colorScheme={colorScheme} {...props}>
      {children}
    </ChakraBadge>
  );
};
