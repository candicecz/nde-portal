import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './button';
import { Box, Flex, Text } from '@chakra-ui/react';

export default {
  title: 'Components/Buttons/Button',
  component: Button,
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

    isFullWidth: {
      table: {},
    },

    /* icon */
    iconSpacing: {
      table: {
        category: 'icon',
      },
    },
    leftIcon: {
      table: {
        category: 'icon',
      },
    },

    rightIcon: {
      table: {
        category: 'icon',
      },
    },

    /* spinner */
    spinner: {
      table: {
        category: 'spinner',
      },
    },
    spinnerPlacement: {
      table: {
        category: 'spinner',
      },
    },

    /* state  */
    loadingText: {
      table: {
        category: 'state',
      },
    },
    isActive: {
      control: { type: 'boolean' },
      table: {
        category: 'state',
      },
    },
    isExternal: {
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
} as ComponentMeta<typeof Button>;

const defaultButtonArgs = {
  isActive: false,
  isLoading: false,
  isDisabled: false,
  isFullWidth: false,
  colorScheme: 'primary',
  variant: 'solid',
  children: 'Click Me',
};

export const AllButtons: ComponentStory<typeof Button> = args => (
  <Flex flexDirection={'column'} my={2}>
    <Flex>
      <Box m={2}>
        <Button {...args} colorScheme='primary'>
          Primary
        </Button>
      </Box>
      <Box m={2}>
        <Button {...args} colorScheme='secondary'>
          Secondary
        </Button>
      </Box>

      <Box m={2}>
        <Button {...args} colorScheme='negative'>
          Negative
        </Button>
      </Box>
      <Box m={2}>
        <Button {...args} colorScheme='gray'>
          Gray
        </Button>
      </Box>

      <Box m={2}>
        <Button {...args} colorScheme='primary' href='#' isExternal>
          External
        </Button>
      </Box>
      <Box m={2}>
        <Button {...args} colorScheme='secondary' href='#' isExternal>
          External
        </Button>
      </Box>
    </Flex>
    <Flex my={2}>
      <Box m={2}>
        <Button {...args} colorScheme='primary' variant='outline'>
          Primary
        </Button>
      </Box>
      <Box m={2}>
        <Button {...args} colorScheme='secondary' variant='outline'>
          Secondary
        </Button>
      </Box>

      <Box m={2}>
        <Button {...args} colorScheme='negative' variant='outline'>
          Negative
        </Button>
      </Box>
      <Box m={2}>
        <Button {...args} colorScheme='gray' variant='outline'>
          Gray
        </Button>
      </Box>
      <Box m={2}>
        <Button
          {...args}
          colorScheme='primary'
          variant='outline'
          href='#'
          isExternal
        >
          External
        </Button>
      </Box>
      <Box m={2}>
        <Button
          {...args}
          colorScheme='secondary'
          variant='outline'
          href='#'
          isExternal
        >
          External
        </Button>
      </Box>
    </Flex>
    <Flex my={2}>
      <Box m={2}>
        <Button {...args} colorScheme='primary' variant='ghost'>
          Primary
        </Button>
      </Box>
      <Box m={2}>
        <Button {...args} colorScheme='secondary' variant='ghost'>
          Secondary
        </Button>
      </Box>

      <Box m={2}>
        <Button {...args} colorScheme='negative' variant='ghost'>
          Negative
        </Button>
      </Box>
      <Box m={2}>
        <Button {...args} colorScheme='gray' variant='ghost'>
          Gray
        </Button>
      </Box>
      <Box m={2}>
        <Button
          {...args}
          colorScheme='primary'
          variant='ghost'
          href='#'
          isExternal
        >
          External
        </Button>
      </Box>
      <Box m={2}>
        <Button
          {...args}
          colorScheme='secondary'
          variant='ghost'
          href='#'
          isExternal
        >
          External
        </Button>
      </Box>
    </Flex>
  </Flex>
);

export const AllSizes: ComponentStory<typeof Button> = args => (
  <Flex flexDirection={'column'} my={2}>
    <Box m={2}>
      <Text>
        Per NIAIDs design system recommendation. {'base'} is the default case.
      </Text>
      <Button {...args} colorScheme='primary' size='base'>
        base
      </Button>
    </Box>
    <Box mt={4}>
      <Text>Other available sizes.</Text>
      <Box m={2}>
        <Button {...args} colorScheme='primary' size='xs'>
          xs
        </Button>
      </Box>
      <Box m={2}>
        <Button {...args} colorScheme='primary' size='sm'>
          sm
        </Button>
      </Box>
      <Box m={2}>
        <Button {...args} colorScheme='primary' size='md'>
          md
        </Button>
      </Box>
      <Box m={2}>
        <Button {...args} colorScheme='primary' size='lg'>
          lg
        </Button>
      </Box>
    </Box>
  </Flex>
);

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

// Solid Buttons
export const SolidPrimary = Template.bind({});
SolidPrimary.args = {
  ...defaultButtonArgs,
};

export const SolidLoading = Template.bind({});
SolidLoading.args = {
  ...defaultButtonArgs,
  isLoading: true,
};

export const SolidDisabled = Template.bind({});
SolidDisabled.args = {
  ...defaultButtonArgs,
  isDisabled: true,
};

// Outline Buttons
export const Outline = Template.bind({});
Outline.args = {
  ...defaultButtonArgs,
  variant: 'outline',
};

export const OutlineLoading = Template.bind({});
OutlineLoading.args = {
  ...defaultButtonArgs,
  isLoading: true,
  variant: 'outline',
};

export const OutlineDisabled = Template.bind({});
OutlineDisabled.args = {
  ...defaultButtonArgs,
  isDisabled: true,
  variant: 'outline',
};

// Ghost Buttons
export const Ghost = Template.bind({});
Ghost.args = {
  ...defaultButtonArgs,
  variant: 'ghost',
};

export const GhostLoading = Template.bind({});
GhostLoading.args = {
  ...defaultButtonArgs,
  isLoading: true,
  variant: 'ghost',
};

export const GhostDisabled = Template.bind({});
GhostDisabled.args = {
  ...defaultButtonArgs,
  isDisabled: true,
  variant: 'ghost',
};

export const ExternalButton = Template.bind({});
ExternalButton.args = {
  children: 'Click Me',
  variant: 'outline',
  isExternal: true,
  href: 'http://localhost:6007/?path=/story/components-card--search-result-card-example',
};
