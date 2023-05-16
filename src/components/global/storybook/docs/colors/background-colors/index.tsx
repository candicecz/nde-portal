import React from 'react';
import { theme } from 'src/components/global';
import { ColorSwatch } from 'global/storybook/components/color-swatch';

export const BackgroundColors: React.FC = () => {
  const getDescription = (colorKey: string) => {
    if (colorKey === 'bg') {
      return 'Page background';
    }
    if (colorKey === 'alt') {
      return 'Page alternate background';
    }
    return undefined;
  };

  return (
    <>
      {Object.entries(theme.colors.page).map(([colorKey, hex]) => {
        return (
          <ColorSwatch
            key={colorKey}
            title={`theme.colors.page.${colorKey}`}
            hexValue={hex}
            hasBorder
            description={getDescription(colorKey)}
          ></ColorSwatch>
        );
      })}
    </>
  );
};
