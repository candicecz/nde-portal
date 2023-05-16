import React from 'react';
import { Box } from '@chakra-ui/react';
import { VisualDescription } from '../visual-description';

interface ColorSwatch {
  description?: string;
  hasBorder?: boolean;
  hexValue: string;
  title: string;
}

// Text component used to describe different design elements in storybook.
export const ColorSwatch: React.FC<ColorSwatch> = ({
  title,
  description,
  hexValue,
  hasBorder,
}) => {
  const text = description ? `${hexValue} - ${description}` : hexValue;
  return (
    <VisualDescription title={title} description={text}>
      <Box
        w={75}
        h={75}
        bg={hexValue}
        m={1}
        borderRadius={'sm'}
        border={hasBorder ? '1px' : 'none'}
      ></Box>
    </VisualDescription>
  );
};
