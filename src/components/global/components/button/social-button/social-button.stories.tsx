import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon } from '@chakra-ui/react';
import { SocialButton } from './social-button';
import { FaTwitter } from 'react-icons/fa';
import { theme } from 'src/components/global';

export default {
  title: 'Components/Buttons/Social',
  component: SocialButton,
  parameters: {
    controls: { sort: 'alpha' },
  },

  argTypes: {
    bg: {
      name: 'backgroundColor',
      defaultValue: theme.colors.twitter['500'],
      description: 'Background color for the button',
      control: {
        type: 'color',
      },
      table: {
        defaultValue: { summary: 'twitter' },
        type: { summary: 'string' },
      },
    },
    href: {
      description: 'Link url',
      table: {
        type: { summary: 'string' },
      },
    },
    label: {
      description:
        'Text description of link - visually hidden for screen readers',
      table: {
        type: { summary: 'string' },
      },
    },
    children: {
      description: 'Inner element or text for element',
      table: {
        type: { summary: 'text|React.ReactElement' },
      },
    },
  },
} as ComponentMeta<typeof SocialButton>;

export const SocialIconButton: ComponentStory<typeof SocialButton> = args => (
  <SocialButton {...args}></SocialButton>
);
SocialIconButton.argTypes = {};

SocialIconButton.args = {
  label: 'twitter',
  href: '#',
  children: <Icon as={FaTwitter} boxSize={4} color={'white'} />,
};
