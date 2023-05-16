import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box, Text } from '@chakra-ui/react';
import { ToggleContainer } from './toggle-container';

export default {
  title: 'Components/ToggleContainer',
  component: ToggleContainer,
  argTypes: {
    ariaLabel: {
      description: 'Label describing button content for accessibility.',
      table: {
        type: { summary: 'text' },
      },
    },
    children: {
      description: 'Inner element or text for element',
      table: {
        type: { summary: 'text|React.ReactElement' },
      },
    },
    boxProps: {
      description:
        'This component composes the chakra-ui Box component, so you can pass all Box style props.',
      table: {
        type: { summary: 'BoxProps' },
      },
    },
    noOfLines: {
      description:
        'Minimum number of lines for text elements to show when <ToggleContainer/> is not expanded.',
      table: {
        type: { summary: 'number' },
      },
    },
    minHeight: {
      description: 'Height of <ToggleContainer/> when not expanded',
      table: {
        type: { summary: 'BoxProps.minHeight' },
      },
    },

    variant: {
      name: 'variant',
      control: {
        type: 'select',
        options: ['border', 'undefined'],
      },
      table: {
        type: {
          summary: 'border|undefined',
        },
      },
    },
  },
} as ComponentMeta<typeof ToggleContainer>;

export const ToggleContainerWithTextExample: ComponentStory<
  typeof ToggleContainer
> = args => (
  <ToggleContainer {...args}>
    <Text>{args.children}</Text>
  </ToggleContainer>
);

ToggleContainerWithTextExample.args = {
  ariaLabel: 'Expand text content',
  children:
    'Sed ut perspiciatis unde om totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
  noOfLines: 1,
  variant: 'border',
};

export const ToggleContainerWithBoxContentExample: ComponentStory<
  typeof ToggleContainer
> = args => (
  <ToggleContainer {...args}>
    <Box bg='red.400' w={'50px'} h={'100px'}></Box>
  </ToggleContainer>
);

ToggleContainerWithBoxContentExample.args = {
  ariaLabel: 'Expand text content',
  children:
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
  minHeight: '20px',
};
