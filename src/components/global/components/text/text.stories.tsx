import React from 'react';
import { Text } from './text';
import { theme } from 'src/components/global';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Text',
  component: Text,
  parameters: { controls: { sort: 'alpha' } },
  argTypes: {
    variant: {
      table: { disable: true },
    },
    size: {
      table: { disable: true },
    },

    fontWeight: {
      name: 'fontWeight',
      description: 'Different text font weights.',
      table: {
        type: {
          summary: 'string|number',
        },
      },
      control: {
        type: 'select',
        options: Object.keys(theme.fontWeights),
      },
    },
    fontSize: {
      name: 'fontSize',
      description: 'Different text font sizes.',
      table: {
        defaultValue: { summary: 'md' },
        type: {
          summary: 'string|number',
        },
      },
      control: {
        type: 'select',
        options: Object.keys(theme.fontSizes),
      },
    },
    fontFamily: {
      name: 'fontFamily',
      description: 'Different text font families.',
      table: {
        defaultValue: { summary: theme.fonts.body },
        type: {
          summary: 'string',
        },
      },
      control: {
        type: 'select',
        options: Object.keys(theme.fonts),
      },
    },

    color: {
      name: 'color',
      defaultValue: theme.colors.text.body,
      description: 'Text color',
      control: {
        type: 'color',
      },
      table: {
        defaultValue: { summary: 'text.body' },
        type: { summary: 'string' },
      },
    },

    colorScheme: {
      table: { disable: true },
    },

    /* CSS properties */
    align: {
      table: {
        defaultValue: { summary: 'none' },
        category: 'CSS properties',
      },
      control: { type: 'text' },
    },
    casing: {
      table: {
        defaultValue: { summary: 'lowercase' },
        category: 'CSS properties',
      },
      control: { type: 'text' },
    },
    decoration: {
      table: {
        category: 'CSS properties',
        defaultValue: { summary: 'none' },
      },
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = args => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Example Text',
  color: theme.colors.text.body,
  fontFamily: 'body',
  fontSize: 'md',
  fontWeight: 'normal',
  align: 'left',
  casing: 'capitalize',
  decoration: 'none',
};

export const Sizes = (args: any) => {
  return Object.keys(theme.fontSizes).map(fontSize => {
    return (
      <Text {...args} key={fontSize} fontSize={fontSize} isTruncated>
        {fontSize} - This is some example text.
      </Text>
    );
  });
};

export const Weights = (args: any) => {
  return Object.keys(theme.fontWeights).map(fontWeight => {
    return (
      <Text {...args} key={fontWeight} fontWeight={fontWeight} isTruncated>
        {fontWeight} - This is some example text.
      </Text>
    );
  });
};
