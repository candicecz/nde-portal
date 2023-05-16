import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';
import { IconButton } from './icon-button';

const meta: Meta<typeof IconButton> = {
  title: 'Components/Buttons/Icon',
  component: IconButton,
  parameters: {
    controls: { sort: 'alpha' },
  },

  argTypes: {
    'aria-label': {
      type: { name: 'string', required: true },
      description: 'Accessibility requirement.',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    /* theming */
    children: {
      name: 'children',
      table: {
        type: {
          summary: 'IconType',
        },
      },
    },
    colorScheme: {
      name: 'colorScheme',
      control: {
        type: 'radio',
        options: ['primary', 'secondary', 'negative'],
      },
      table: {
        type: {
          summary: 'primary|secondary|negative',
        },
      },
    },

    size: {
      name: 'size',
      type: { name: 'string', required: false },

      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg'],
      },
    },

    variant: {
      name: 'variant',
      control: {
        type: 'select',
        options: ['solid', 'outline', 'link', 'ghost'],
      },
      table: {
        type: {
          summary: 'solid|ghost|link|unstyled',
        },
      },
    },

    /* spinner */
    spinner: {
      table: {
        category: 'spinner',
      },
    },

    /* state  */

    isActive: {
      control: { type: 'boolean' },
      table: {
        category: 'state',
      },
    },

    isLoading: {
      control: { type: 'boolean' },
      table: {
        category: 'state',
      },
    },
    isDisabled: {
      control: { type: 'boolean' },
      table: {
        category: 'state',
      },
    },
  },
};

export const AllButtons: StoryObj<typeof IconButton> = {
  render: (args: any) => (
    <Flex flexDirection={'column'} my={2}>
      <Flex>
        <Box m={2}>
          <Text>Primary</Text>
          <IconButton {...args} colorScheme='primary'>
            <FaBars aria-label='menu' />
          </IconButton>
        </Box>
        <Box m={2}>
          <Text>Secondary</Text>
          <IconButton {...args} colorScheme='secondary'>
            <FaBars aria-label='menu' />
          </IconButton>
        </Box>
        <Box m={2}>
          <Text>Negative</Text>
          <IconButton {...args} colorScheme='negative'>
            <FaBars aria-label='menu' />
          </IconButton>
        </Box>
      </Flex>
    </Flex>
  ),
};
export default meta;

export const AllSizes: StoryObj<typeof IconButton> = {
  render: (args: any) => (
    <Flex flexDirection={'column'} my={2}>
      <Flex>
        <Box m={2}>
          <Text>Default</Text>
          <IconButton {...args} colorScheme='primary'>
            <FaBars aria-label='menu' />
          </IconButton>
        </Box>

        <Box m={2}>
          <Text>sm</Text>
          <IconButton {...args} colorScheme='primary' size='sm'>
            <FaBars aria-label='menu' />
          </IconButton>
        </Box>
        <Box m={2}>
          <Text>md</Text>
          <IconButton {...args} colorScheme='primary' size='md'>
            <FaBars aria-label='menu' />
          </IconButton>
        </Box>

        <Box m={2}>
          <Text>lg</Text>
          <IconButton {...args} colorScheme='primary' size='lg'>
            <FaBars aria-label='menu' />
          </IconButton>
        </Box>
      </Flex>
    </Flex>
  ),
};
