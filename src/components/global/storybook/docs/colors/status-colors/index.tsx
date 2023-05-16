import React from 'react';
import { theme } from 'src/components/global';
import { ColorSwatch } from 'global/storybook/components/color-swatch';

export const StatusColors: React.FC = () => {
  const getDescription = (colorKey: string) => {
    if (colorKey === 'success') {
      return 'Used for success state';
    }
    if (colorKey === 'warning') {
      return 'Used for warning state';
    }
    if (colorKey === 'error') {
      return 'Used for error/negative state';
    }
    if (colorKey === 'alert') {
      return 'Used for alert message';
    }
    if (colorKey === 'info') {
      return 'Used for information message';
    }
    return undefined;
  };

  return (
    <>
      {Object.entries(theme.colors.status).map(([colorKey, hex]) => {
        return (
          <ColorSwatch
            key={colorKey}
            title={`theme.colors.status.${colorKey}`}
            hexValue={hex}
            description={getDescription(colorKey)}
          ></ColorSwatch>
        );
      })}
    </>
  );
};
