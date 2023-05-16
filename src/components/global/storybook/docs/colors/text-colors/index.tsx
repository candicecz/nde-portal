import React from 'react';
import { theme } from 'src/components/global';
import { ColorSwatch } from 'global/storybook/components/color-swatch';

export const TextColors: React.FC = () => {
  const getDescription = (colorKey: string) => {
    if (colorKey === 'body') {
      return 'Used as default text color';
    }
    if (colorKey === 'heading') {
      return 'Used as secondary/heading color';
    }
    return undefined;
  };

  return (
    <>
      {Object.entries(theme.colors.text).map(([colorKey, hex]) => {
        return (
          <ColorSwatch
            key={colorKey}
            title={`theme.colors.text.${colorKey}`}
            hexValue={hex}
            description={getDescription(colorKey)}
          ></ColorSwatch>
        );
      })}
    </>
  );
};

export const LinkColors: React.FC = () => {
  const getDescription = (colorKey: string) => {
    if (colorKey === 'color') {
      return 'Used as default link color';
    }
    if (colorKey === 'visited') {
      return 'Used as color for a visited link';
    }
    return undefined;
  };

  return (
    <>
      {Object.entries(theme.colors.link).map(([colorKey, hex]) => {
        return (
          <ColorSwatch
            key={colorKey}
            title={`theme.colors.link.${colorKey}`}
            hexValue={hex}
            description={getDescription(colorKey)}
          ></ColorSwatch>
        );
      })}
    </>
  );
};
