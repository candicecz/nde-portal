import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text, Button } from '@chakra-ui/react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardActions,
} from './card';
import { theme } from 'src/components/global';

export default {
  title: 'Components/Card',
  component: Card,

  argTypes: {
    children: {
      description: 'Inner element or text for element',
      table: {
        type: { summary: 'text|React.ReactElement' },
      },
    },
    boxProps: {
      description:
        'The card component composes the chakra-ui Box component, so you can pass all Box style props.',
      table: {
        type: { summary: 'BoxProps' },
      },
    },

    variant: {
      name: 'variant',
      description: `
      Card Styles
      \n
      'base' | undefined: Basic white card with padding.
      \n
      'colorful': with color background (used for search results card).
      `,
      defaultValue: undefined,
      control: {
        type: 'select',
        options: [...Object.keys(theme.components.Card.variants), 'base'],
      },
      table: {
        defaultValue: { summary: 'undefined' },
        type: { summary: 'string' },
      },
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = args => <Card {...args} />;

export const CardExample = Template.bind({});
CardExample.args = { width: '20rem', height: '10rem' };

export const CardWithHeader: ComponentStory<typeof Card> = args => {
  return (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
      </CardHeader>
      <CardBody>
        <Text>{args.children}</Text>
      </CardBody>
    </Card>
  );
};

CardWithHeader.args = {
  children: 'with body text',
};

export const CardWithHeaderAndFooter: ComponentStory<typeof Card> = args => {
  return (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
      </CardHeader>
      <CardBody>
        <Text>{args.children}</Text>
      </CardBody>
      <CardFooter>Footer</CardFooter>
    </Card>
  );
};

CardWithHeaderAndFooter.args = {
  children: 'with body text',
};

export const CardWithColorVariant: ComponentStory<typeof Card> = args => {
  return (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
      </CardHeader>
      <CardBody>
        <Text>{args.children}</Text>
      </CardBody>
      <CardFooter>
        <Text>Footer {args.children}</Text>
      </CardFooter>
    </Card>
  );
};

CardWithColorVariant.args = {
  children: 'with body text',
  variant: 'colorful',
};

export const CardWithHeaderAndMaxWidth: ComponentStory<typeof Card> = args => {
  return (
    <Card {...args}>
      <CardHeader>
        <CardTitle> Card Title</CardTitle>
      </CardHeader>
      <CardBody>
        <Text>{args.children}</Text>
      </CardBody>
    </Card>
  );
};

CardWithHeaderAndMaxWidth.args = {
  children: 'Card with a header + set max width.',
  maxW: '50%',
};

export const CardWithLongHeader: ComponentStory<typeof Card> = args => {
  return (
    <Card {...args}>
      <CardHeader>
        <CardTitle>This is a long title that should cause wrapping</CardTitle>
      </CardHeader>
    </Card>
  );
};

export const CardWithLongHeaderAndMaxWidth: ComponentStory<
  typeof Card
> = args => {
  return (
    <Card {...args}>
      <CardHeader>
        <CardTitle>This is a long title that should cause wrapping</CardTitle>
      </CardHeader>
      <CardBody>
        <Text>{args.children}</Text>
      </CardBody>
    </Card>
  );
};

CardWithLongHeaderAndMaxWidth.args = {
  children: 'Card with a set max width and a long header',
  maxW: '50%',
};

export const CardWithMultipleActions: ComponentStory<typeof Card> = args => {
  return (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Title heading</CardTitle>
      </CardHeader>
      <CardBody>
        <Text>{args.children}</Text>
      </CardBody>
      <CardFooter>
        <CardActions>
          <Button>Button</Button>
        </CardActions>
      </CardFooter>
    </Card>
  );
};

CardWithMultipleActions.args = {
  children: 'Card with many actions',
  variant: 'colorful',
};
