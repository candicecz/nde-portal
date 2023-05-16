import React from 'react';
import { theme } from 'src/components/global';
import { ColorSwatch } from 'global/storybook/components/color-swatch';
import { Box, Heading } from '@chakra-ui/react';

export const BrandColors = () => {
  const { colors } = theme;
  // Additional description for theme swatch
  const get_description = (themeKey: string, colorKey: string) => {
    if (
      themeKey === 'primary' ||
      themeKey === 'secondary' ||
      themeKey === 'tertiary'
    ) {
      if (colorKey === '500' || colorKey === '500') {
        return `(NIAID ${themeKey}) - Used for emphasis of main UI elements`;
      }
      if (colorKey === '600' || colorKey === '600') {
        return `Used as hover for NIAID ${themeKey} color`;
      }
    }
    if (themeKey === 'niaid') {
      if (colorKey === 'color') {
        return `NIAID color`;
      }
      if (colorKey === 'placeholder') {
        return `NIAID placeholder color`;
      }
    }
    return undefined;
  };

  // Get the only the brand sections from the theme.
  const brandColors = Object.entries(colors).filter(v => {
    return (
      v[0] === 'primary' ||
      v[0] === 'secondary' ||
      v[0] === 'tertiary' ||
      v[0] === 'accent' ||
      v[0] === 'niaid'
    );
  });

  return (
    <>
      {brandColors.map(([themeKey, palette]) => {
        return (
          <Box py={2} key={themeKey}>
            <Heading as={'h6'} size={'h6'} fontFamily={'body'}>
              {themeKey.charAt(0).toUpperCase() + themeKey.slice(1)}
            </Heading>
            {Object.entries(palette).map(([colorKey, hex]) => {
              if (hex === '') {
                return;
              }
              return (
                <ColorSwatch
                  key={colorKey}
                  title={`theme.colors.${themeKey}.${colorKey}`}
                  hexValue={hex}
                  description={get_description(themeKey, colorKey)}
                  hasBorder={+colorKey <= 100}
                ></ColorSwatch>
              );
            })}
          </Box>
        );
      })}
    </>
  );
};
