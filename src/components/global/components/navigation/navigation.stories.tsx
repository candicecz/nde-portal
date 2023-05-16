import React from 'react';
import { Navigation, MobileNavItem, DesktopNavItem } from './navigation';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { theme } from 'src/components/global';
import navigationConfig from './navigation.config.json';

export default {
  title: 'Components/Navigation',
  component: Navigation,
  argTypes: {},
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = args => (
  <Navigation {...args} />
);

export const NavigationBarNoLinks = Template.bind({});

/* Navigation Bar Story  */
export const DefaultNavigation = Template.bind({});
DefaultNavigation.args = {
  navigation: navigationConfig,
  bg: 'tertiary.700',
};
DefaultNavigation.argTypes = {
  navigation: {
    description: `
    {
      href: string;
      routes: Route[]
    }
    where Route[] is an array of objects where:
    Route = {
      label: string,
      href: string
      subLabel?: string,
      isExternal?:boolean,
      routes?: Route[],
    }
    `,
    table: {
      type: {
        summary: 'Array<NavItem>',
      },
    },
  },
  bg: {
    description: 'Background color for navigation bar.',
    defaultValue: theme.colors.tertiary['700'],
    control: {
      type: 'color',
    },
    table: {
      defaultValue: { summary: 'tertiary.700' },
      type: { summary: 'string' },
    },
  },
};

const NavigationItemArgTypes = {
  label: {
    description: 'Text description of link',
    table: {
      type: { summary: 'string' },
    },
  },
  href: {
    description: 'Link url',
    table: {
      type: { summary: 'string' },
    },
  },
};

/* Mobile Navigation Item Story  */
export const MobileNavigationItem: ComponentStory<
  typeof MobileNavItem
> = args => <MobileNavItem {...args}></MobileNavItem>;
MobileNavigationItem.args = {
  label: 'Link Name',
  href: '#',
};
MobileNavigationItem.argTypes = {
  ...NavigationItemArgTypes,
};

/* Desktop Navigation Item Story  */
export const DesktopNavigationItem: ComponentStory<
  typeof DesktopNavItem
> = args => <DesktopNavItem {...args}></DesktopNavItem>;

DesktopNavigationItem.args = {
  label: 'Link Name',
  href: '#',
};

DesktopNavigationItem.argTypes = NavigationItemArgTypes;

DesktopNavigationItem.parameters = {
  label: 'Link Name',
  href: '#',
  backgrounds: {
    default: 'gray',
    values: [{ name: 'gray', value: '#132015' }],
  },
};
