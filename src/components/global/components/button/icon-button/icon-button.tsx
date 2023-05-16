import React from 'react';
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react';

type OmittedProps =
  | 'leftIcon'
  | 'isFullWidth'
  | 'rightIcon'
  | 'loadingText'
  | 'iconSpacing'
  | 'spinnerPlacement';

export interface IconButtonProps extends Omit<ChakraButtonProps, OmittedProps> {
  /**
   * The icon to be used in the button.
   * @type React.ReactElement
   */
  icon?: React.ReactElement;
  /**
   * If `true`, the button will be perfectly round. Else, it'll be slightly round
   */
  isRound?: boolean;
  /**
   * A11y: A label that describes the button
   */
  'aria-label': string;
}

/**
 * Override Chakra-ui custom styling (notably padding:0 applied)
 */

export const IconButton: React.FC<IconButtonProps> = props => {
  const { icon, children, isRound, 'aria-label': ariaLabel, ...rest } = props;

  /**
   * Passing the icon as prop or children should work
   */
  const element = icon || children;
  const _children = React.isValidElement(element)
    ? React.cloneElement(element as any, {
        'aria-hidden': true,
        focusable: false,
      })
    : null;
  // Padding is inherited from button but buttonIcon should be square
  return (
    <ChakraButton
      padding={0}
      borderRadius={isRound ? 'full' : undefined}
      aria-label={ariaLabel}
      // override Button default of 'base' for 'md'
      size={props.size || 'md'}
      {...rest}
    >
      {_children}
    </ChakraButton>
  );
};
