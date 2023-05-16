import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from '@chakra-ui/react';
import { SearchInput } from './input';

export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    controls: { sort: 'alpha' },
  },

  argTypes: {
    /* theming */
    children: {
      name: 'children',
      table: {
        type: {
          summary: 'text',
        },
      },
    },
    colorScheme: {
      name: 'colorScheme',
      control: {
        type: 'radio',
        options: ['primary', 'secondary', 'gray', 'niaid'],
      },
      table: {
        type: {
          summary: 'primary|secondary|gray|niaid',
        },
      },
    },
    inputProps: {
      description:
        'For all accepted props, see Input props from Chakra-UI: https://chakra-ui.com/docs/components/form/input#props',
      table: {
        type: { summary: 'BoxProps' },
      },
    },

    size: {
      name: 'size',
      control: {
        type: 'radio',
        options: ['xs', 'sm', 'md', 'lg'],
      },
      table: {
        type: {
          summary: 'sm|md|lg',
        },
      },
    },
    isFullWidth: {
      description:
        'If true, the form control will be disabled. This has 2 side effects: - The FormLabel will have `data-disabled` attribute - The form element (e.g, Input) will be disabled',
      control: { type: 'boolean' },
    },
    isInvalid: {
      description:
        'If true, the form control will be invalid. This has 2 side effects: - The FormLabel and FormErrorIcon will have `data-invalid` set to true - The form element (e.g, Input) will have `aria-invalid` set to true',
      control: { type: 'boolean' },
    },
    isReadOnly: {
      description: 'If true, the form control will be readonly',
      control: { type: 'boolean' },
    },
    isRequired: {
      description:
        'If true, the form control will be required. This has 2 side effects: - The FormLabel will show a required indicator - The form element (e.g, Input) will have `aria-required` set to true',
      control: { type: 'boolean' },
    },

    variant: {
      name: 'variant',
      control: {
        type: 'select',
        options: ['outline', 'filled', 'flushed', 'unstyled', 'shadow'],
      },
      table: {
        type: {
          summary: 'outline|filled|flushed|unstyled|shadow',
        },
      },
    },
  },
} as ComponentMeta<typeof Input>;

/**
 * Input Variants
 */
export const Inputs: ComponentStory<typeof Input> = args => (
  <Stack spacing={3}>
    <Input
      variant='outline'
      placeholder='Outline'
      colorScheme={'primary'}
      {...args}
    />
    <Input variant='filled' placeholder='Filled' {...args} />
    <Input variant='flushed' placeholder='Flushed' {...args} />
    <Input variant='unstyled' placeholder='Unstyled' {...args} />
    <Input variant='shadow' placeholder='Shadow' colorScheme={'secondary'} />
  </Stack>
);

export const CustomPlaceholder: ComponentStory<typeof Input> = args => (
  <Stack spacing={3}>
    <Input placeholder='default placeholder' />
    <Input
      placeholder='custom placeholder'
      _placeholder={{ opacity: 1, color: 'niaid.placeholder' }}
      {...args}
    />
    <Input
      color='primary.500'
      placeholder='custom placeholder'
      _placeholder={{ color: 'inherit' }}
      {...args}
    />
    <Input
      color='secondary.700'
      placeholder='custom placeholder'
      _placeholder={{ opacity: 0.4, color: 'inherit' }}
      {...args}
    />
  </Stack>
);

export const InputWithButton: ComponentStory<typeof Input> = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
        variant={'shadow'}
      />
      <InputRightElement width='4.5rem'>
        <Button size='sm' mr={1} onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export const InputWithSearch: ComponentStory<typeof Input> = args => {
  const [searchTerm, setSearchTerm] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');
  return (
    <>
      <Text my={2} fontSize='sm' color='niaid.placeholder'>
        Searched Term: {searchTerm || '-'}
      </Text>
      <Text my={2} fontSize='sm' color='niaid.placeholder'>
        Submitted Term: {submittedValue || '-'}
      </Text>
      <SearchInput
        ariaLabel='search for datasets'
        handleChange={e => setSearchTerm(e.target.value)}
        handleSubmit={e => {
          e.preventDefault();
          setSubmittedValue(searchTerm);
        }}
        w='100%'
        {...args}
      ></SearchInput>
    </>
  );
};
InputWithSearch.args = {
  placeholder: 'Enter a keyword or phrase',
  colorScheme: 'secondary',
  isResponsive: true,
  size: 'md',
};
