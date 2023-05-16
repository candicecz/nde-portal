import React from 'react';
import { VisuallyHidden, chakra } from '@chakra-ui/react';

export interface SocialButtonProps {
  label: string;
  href: string;
  bg?: string;
}

// Social media icon buttons
export const SocialButton: React.FC<SocialButtonProps> = ({
  children,
  label,
  href,
  bg,
  ...props
}) => {
  return (
    <chakra.button
      bg={bg ?? 'whiteAlpha.100'}
      rounded={'sm'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'all 0.3s ease'}
      _hover={{
        boxShadow: 'md',
        opacity: 0.87,
      }}
      {...props}
    >
      {/* For accessibility */}
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};
