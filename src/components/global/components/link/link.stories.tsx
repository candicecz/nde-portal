import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Link } from './link';
import { theme } from 'src/components/global';
import { Text } from 'global/components';
export default {
  title: 'Components/Link',
  component: Link,

  argTypes: {
    children: {
      description: 'Inner element or text for element',
      table: {
        type: { summary: 'text|React.ReactElement' },
      },
    },
    color: {
      name: 'color',
      defaultValue: theme.colors.link.color,
      description: 'Color of unhovered link.',
      control: {
        type: 'color',
      },
      table: {
        defaultValue: { summary: theme.colors.link.color },
        type: { summary: 'string' },
      },
    },
    _hover: {
      description: 'Color for a hovered link.',
      defaultValue: {
        color: 'link.color',
      },
      control: {
        type: 'object',
      },
      table: {
        defaultValue: { summary: theme.colors.niaid.color },
        type: { summary: 'object' },
      },
    },
    _visited: {
      description: 'Color for a visited link.',
      defaultValue: {
        color: 'link.visited',
      },
      control: {
        type: 'object',
      },
      table: {
        defaultValue: { summary: theme.colors.link.visited },
        type: { summary: 'object' },
      },
    },
    variant: {
      name: 'variant',
      description: `Underline styles for link where
      \n
      'base' | undefined: Underlined text which disappears on hover.
      \n
      'unstyled': Text has no underline.
      \n
      'link': Text that has an underline when hovered.
      `,
      defaultValue: undefined,
      control: {
        type: 'select',
        options: [...Object.keys(theme.components.Link.variants), 'base'],
      },
      table: {
        defaultValue: { summary: 'undefined' },
        type: { summary: 'string' },
      },
    },

    /* Text Styles */

    isExternal: {
      defaultValue: false,
      table: {
        defaultValue: { summary: false },
      },
    },
    isTruncated: {
      defaultValue: false,

      table: {
        category: 'Text Properties',
      },
    },
    noOfLines: {
      control: {
        type: 'number',
      },
      table: {
        category: 'Text Properties',
      },
    },

    /* Hidden Controls */
    colorScheme: {
      table: {
        disable: true,
      },
    },
    size: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = args => <Link {...args} />;

export const DefaultLink = Template.bind({});
DefaultLink.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  href: '#',
  isExternal: true,
};

export const ExternalLink = Template.bind({});
ExternalLink.args = {
  children: 'External link',
  isExternal: true,
  href: '#',
};

export const UnstyledLink = Template.bind({});
UnstyledLink.args = {
  children: 'Unstyled Link',
  href: '#',
  variant: 'unstyled',
};

export const GhostLink = Template.bind({});
GhostLink.args = {
  children: 'Ghost Link',
  href: '#skldhfd',
  variant: 'ghost',
  isExternal: true,
};

const TextTemplate: ComponentStory<typeof Link> = args => (
  <Link {...args}>
    <Text>
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
      aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
      fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est
    </Text>
    <Text>
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
      aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
      fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est
    </Text>
  </Link>
);
export const WithNestedTextElement = TextTemplate.bind({});
WithNestedTextElement.args = {
  href: '#',
  isExternal: true,
  color: 'link.color',
  _hover: { color: 'link.color' },
  _visited: { color: 'link.visited' },
};
