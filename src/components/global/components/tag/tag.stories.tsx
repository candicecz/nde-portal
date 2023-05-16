import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  Box,
  Flex,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
} from '@chakra-ui/react';

export default {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    controls: { sort: 'alpha' },
  },

  argTypes: {
    /* theming */
    children: {
      name: 'children',
      table: {
        type: {
          summary: 'text|React.ReactElement',
        },
      },
    },
    colorScheme: {
      name: 'colorScheme',
      control: {
        type: 'radio',
        options: ['primary', 'secondary', 'gray'],
      },
      table: {
        type: {
          summary: 'primary|secondary|gray|success|warning|negative|info',
        },
      },
    },
    size: {
      name: 'size',
      control: {
        type: 'radio',
        options: ['sm', 'md', 'lg'],
      },
      table: {
        type: {
          summary: 'sm|md|lg',
        },
      },
    },

    variant: {
      name: 'variant',
      control: {
        type: 'select',
        options: ['solid', 'outline', 'subtle'],
      },
      table: {
        type: {
          summary: 'solid|outline|subtle',
        },
      },
    },
  },
} as ComponentMeta<typeof Tag>;

/**
 * Regular Solid Tag
 */

export const Chips: ComponentStory<typeof Tag> = args => (
  <Flex flexDirection={'column'} my={2}>
    <Text>Search Chips</Text>
    <Flex w={'100%'} flexWrap='wrap'>
      <Box m={2}>
        <Tag {...args} colorScheme='primary'>
          <TagLabel>Primary</TagLabel>
        </Tag>
      </Box>
      <Box m={2}>
        <Tag {...args} colorScheme='secondary'>
          <TagLabel>Secondary</TagLabel>
        </Tag>
      </Box>
      <Box m={2}>
        <Tag {...args} colorScheme='gray'>
          <TagLabel>Gray</TagLabel>
        </Tag>
      </Box>
    </Flex>
    <Text>With Close Button</Text>
    <Flex w={'100%'} flexWrap='wrap'>
      <Box m={2}>
        <Tag {...args} colorScheme='primary'>
          <TagLabel>Primary</TagLabel>
          <TagCloseButton />
        </Tag>
      </Box>
      <Box m={2}>
        <Tag {...args} colorScheme='secondary'>
          <TagLabel>Secondary</TagLabel>
          <TagCloseButton />
        </Tag>
      </Box>
      <Box m={2}>
        <Tag {...args} colorScheme='gray'>
          <TagLabel>Gray</TagLabel>
          <TagCloseButton />
        </Tag>
      </Box>
    </Flex>
  </Flex>
);
