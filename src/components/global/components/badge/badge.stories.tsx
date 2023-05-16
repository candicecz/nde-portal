import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Badge } from './badge';
import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { FaLockOpen, FaLock } from 'react-icons/fa';

export default {
  title: 'Components/Badge',
  component: Badge,
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
        options: [
          'primary',
          'secondary',
          'gray',
          'success',
          'warning',
          'negative',
          'info',
        ],
      },
      table: {
        type: {
          summary: 'primary|secondary|gray|success|warning|negative|info',
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
} as ComponentMeta<typeof Badge>;

/**
 * Regular Solid Badge
 */

export const SolidBadges: ComponentStory<typeof Badge> = args => (
  <Flex flexDirection={'column'} my={2}>
    <Text>Theme Badges</Text>
    <Flex w={'100%'} flexWrap='wrap'>
      <Box m={2}>
        <Badge {...args} colorScheme='primary'>
          Primary
        </Badge>
      </Box>
      <Box m={2}>
        <Badge {...args} colorScheme='secondary'>
          Secondary
        </Badge>
      </Box>
      <Box m={2}>
        <Badge {...args} colorScheme='gray'>
          Gray
        </Badge>
      </Box>
      <Box m={2}>
        <Badge {...args} colorScheme='tertiary'>
          Tertiary
        </Badge>
      </Box>
    </Flex>
    <Text>Status Badges</Text>
    <Flex w={'100%'} flexWrap='wrap'>
      <Box m={2}>
        <Badge {...args} colorScheme='success'>
          Success
        </Badge>
      </Box>
      <Box m={2}>
        <Badge {...args} colorScheme='warning'>
          Warning
        </Badge>
      </Box>
      <Box m={2}>
        <Badge {...args} colorScheme='negative'>
          Negative
        </Badge>
      </Box>

      <Box m={2}>
        <Badge {...args} colorScheme='info'>
          Info
        </Badge>
      </Box>
    </Flex>
  </Flex>
);

/**
 * Regular Subtle Badge
 */

export const SubtleBadges: ComponentStory<typeof Badge> = args => (
  <Flex flexDirection={'column'} my={2}>
    <Text>Theme Badges</Text>
    <Flex w={'100%'} flexWrap='wrap'>
      <Box m={2}>
        <Badge {...args} variant='subtle' colorScheme='primary'>
          Primary
        </Badge>
      </Box>
      <Box m={2}>
        <Badge {...args} variant='subtle' colorScheme='secondary'>
          Secondary
        </Badge>
      </Box>
      <Box m={2}>
        <Badge {...args} variant='subtle' colorScheme='gray'>
          Gray
        </Badge>
      </Box>
      <Box m={2}>
        <Badge {...args} variant='subtle' colorScheme='tertiary'>
          Tertiary
        </Badge>
      </Box>
    </Flex>
    <Text>Status Badges</Text>
    <Flex w={'100%'} flexWrap='wrap'>
      <Box m={2}>
        <Badge {...args} variant='subtle' colorScheme='success'>
          Success
        </Badge>
      </Box>
      <Box m={2}>
        <Badge {...args} variant='subtle' colorScheme='warning'>
          Warning
        </Badge>
      </Box>
      <Box m={2}>
        <Badge {...args} variant='subtle' colorScheme='negative'>
          Negative
        </Badge>
      </Box>

      <Box m={2}>
        <Badge {...args} variant='subtle' colorScheme='info'>
          Info
        </Badge>
      </Box>
    </Flex>
  </Flex>
);

/**
 * Regular Outline Badge
 */

export const OutlineBadges: ComponentStory<typeof Badge> = args => (
  <Flex flexDirection={'column'} my={2}>
    <Text>Theme Badges</Text>
    <Flex w={'100%'} flexWrap='wrap'>
      <Box m={2}>
        <Badge {...args} variant='outline' colorScheme='primary'>
          Primary
        </Badge>
      </Box>
      <Box m={2}>
        <Badge {...args} variant='outline' colorScheme='secondary'>
          Secondary
        </Badge>
      </Box>
      <Box m={2}>
        <Badge {...args} variant='outline' colorScheme='gray'>
          Gray
        </Badge>
      </Box>
      <Box m={2}>
        <Badge {...args} variant='outline' colorScheme='tertiary'>
          Tertiary
        </Badge>
      </Box>
    </Flex>
    <Text>Status Badges</Text>
    <Flex w={'100%'} flexWrap='wrap'>
      <Box m={2}>
        <Badge {...args} variant='outline' colorScheme='success'>
          Success
        </Badge>
      </Box>
      <Box m={2}>
        <Badge {...args} variant='outline' colorScheme='warning'>
          Warning
        </Badge>
      </Box>
      <Box m={2}>
        <Badge {...args} variant='outline' colorScheme='negative'>
          Negative
        </Badge>
      </Box>

      <Box m={2}>
        <Badge {...args} variant='outline' colorScheme='info'>
          Info
        </Badge>
      </Box>
    </Flex>
  </Flex>
);

/**
 * Access Badge Example
 */

interface AccessBadgeProps {
  conditionsOfAccess?: 'restricted' | 'public' | 'controlled';
  children: React.ReactNode;
}

export const AccessBadge = (args: AccessBadgeProps) => {
  let colorScheme;
  let iconType;

  if (args.conditionsOfAccess === 'public') {
    colorScheme = 'success';
    iconType = FaLockOpen;
  }

  if (args.conditionsOfAccess === 'restricted') {
    colorScheme = 'negative';
    iconType = FaLock;
  }

  if (args.conditionsOfAccess === 'controlled') {
    colorScheme = 'warning';
    iconType = FaLock;
  }

  return (
    <Badge colorScheme={colorScheme} {...args}>
      {iconType && <Icon mr={2} as={iconType} />}
      {args.children}
    </Badge>
  );
};

AccessBadge.args = {
  children: 'Public',
  variant: 'solid',
  conditionsOfAccess: 'public',
};
