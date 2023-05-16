import React from 'react';
import { theme } from 'src/components/global';
import { ColorSwatch } from 'global/storybook/components/color-swatch';

export const BorderColors: React.FC = () => {
  const getDescription = (colorKey: string) => {
    if (colorKey === '200') {
      return 'Border Light';
    }
    if (colorKey === '700') {
      return 'Input & Link Border';
    }
    return undefined;
  };

  return (
    <>
      {Object.entries(theme.colors.gray).map(([colorKey, hex]) => {
        if (colorKey === '200' || colorKey === '700')
          return (
            <ColorSwatch
              key={colorKey}
              title={`theme.colors.gray.${colorKey}`}
              hexValue={hex}
              description={getDescription(colorKey)}
            ></ColorSwatch>
          );
      })}
    </>
  );
};
