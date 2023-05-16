import React from 'react';
import { Heading } from './heading';
import { theme } from 'src/components/global';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Heading',
  component: Heading,
  parameters: { controls: { sort: 'alpha' } },
  argTypes: {
    children: {
      description: 'Inner element or text for element',
      table: {
        type: { summary: 'text|React.ReactElement' },
      },
    },
    color: {
      name: 'color',
      defaultValue: theme.colors.text.heading,
      description: 'Color of heading text',
      control: {
        type: 'color',
      },
      table: {
        defaultValue: { summary: 'text.heading' },
        type: { summary: 'string' },
      },
    },

    colorScheme: {
      table: { disable: true },
    },

    variant: {
      table: { disable: true },
    },
    size: {
      name: 'size',
      description: 'Different text font sizes.',
      table: {
        type: {
          summary: 'string',
        },
      },
      control: {
        type: 'select',
        options: Object.keys(theme.components['Heading'].sizes),
      },
    },
    fontWeight: {
      name: 'fontWeight',
      defaultValue: 'bold',
      description: 'Different text font weights.',
      table: {
        defaultValue: { summary: 'bold' },

        type: {
          summary: 'string|number',
        },
      },
      control: {
        type: 'select',
        options: Object.keys(theme.fontWeights),
      },
    },

    fontFamily: {
      name: 'fontFamily',
      defaultValue: theme.fonts.heading,
      description: 'Different text font families.',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: theme.fonts.heading },
      },
      control: {
        type: 'select',
        options: Object.keys(theme.fonts),
      },
    },
    isTruncated: {
      defaultValue: false,
    },
    noOfLines: {
      control: {
        type: 'number',
      },
    },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = args => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Example Text',
  color: theme.colors.text.heading,
  fontFamily: 'heading',
  size: 'h3',
};

export const Sizes = (args: any) => {
  return Object.keys(theme.components['Heading'].sizes).map(size => {
    return (
      <Heading {...args} key={size} size={size}>
        {size} - This is some example text.
      </Heading>
    );
  });
};

export const Weights = (args: any) => {
  return Object.keys(theme.fontWeights).map(fontWeight => {
    return (
      <Heading {...args} key={fontWeight} fontWeight={fontWeight} isTruncated>
        {fontWeight} - This is some example text.
      </Heading>
    );
  });
};
