import React from 'react';
import { Footer } from './footer';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import footerConfig from './footer.config.json';

export default {
  title: 'Components/Footer',
  component: Footer,
  argTypes: {
    contact: {
      description: '',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    navigation: {
      description: `
      An array of footer items where:
      FooterItem = {
        label: string;
        type?: string;
        routes?: FooterItem[];
        href?: string;
        subLabel?: string;
        isExternal?: boolean;
      }
      `,
      table: {
        type: {
          summary: 'Array<FooterItem>',
        },
      },
    },
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = args => <Footer {...args} />;

/* Default Footer Story  */
export const DefaultFooter = Template.bind({});

/* Default Footer Story with contact info  */
export const DefaultFooterWithContactUs = Template.bind({});
DefaultFooterWithContactUs.args = {};

/* Custom Footer Links  */
export const FooterWithPortalLinks = Template.bind({});
FooterWithPortalLinks.args = {
  navigation: footerConfig,
};

/* Custom Footer Links with contact info */
export const FooterWithPortalLinksAndWithContactUs = Template.bind({});
FooterWithPortalLinksAndWithContactUs.args = {
  navigation: footerConfig,
};
