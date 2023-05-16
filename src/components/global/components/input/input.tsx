import React, { useState } from 'react';
import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  InputProps,
  IconButton,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

export interface SearchInputProps extends InputProps {
  // Function fired when input is changed.
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // Function fired button is submitted.
  handleSubmit?: (e: React.FormEvent<HTMLDivElement>) => void;
  // Variant for button
  buttonVariant?: string;
  // Should input resize responsively
  isResponsive?: boolean;
  // Button reflects loading state
  isLoading?: boolean;
  // For accessibility, we need to link label and input with identical for and id field.
  ariaLabel: string;
}

/**
 * Searchbar input field
 */
export const SearchInput: React.FC<SearchInputProps> = ({
  size = 'md',
  bg = 'white',
  handleChange,
  handleSubmit,
  isResponsive = true,
  buttonVariant,
  ariaLabel,
  colorScheme,
  isLoading,
  ...props
}) => {
  const [showInput, setShowInput] = useState(false);

  const sizeConfig: any = {
    xs: {
      width: '4rem',
      h: '1.25rem',
    },
    sm: {
      width: '5.5rem',
      h: '1.7rem',
    },
    md: {
      width: '5.5rem',
      h: '2.5rem',
    },
    lg: {
      width: '6.5rem',
      h: '3rem',
    },
  };

  return (
    <Flex
      as='form'
      alignItems='center'
      position='relative'
      onSubmit={e => {
        e.preventDefault();
        handleSubmit && handleSubmit(e);
      }}
      {...props}
    >
      <VisuallyHidden>
        <label htmlFor={ariaLabel}>{ariaLabel}</label>
      </VisuallyHidden>

      <InputGroup
        // If in 'responsive mode' we use a button to toggle the visibility of the input in mobile size.
        visibility={[
          isResponsive && !showInput ? 'hidden' : 'visible',
          'visible',
        ]}
        size={size}
        _focusWithin={{
          svg: { color: `${colorScheme}.500` },
        }}
      >
        <InputLeftElement pointerEvents='none'>
          <FaSearch color='gray.300' />
        </InputLeftElement>
        <Input
          id={ariaLabel}
          type='text'
          variant='shadow'
          size={size}
          onChange={e => handleChange(e)}
          colorScheme={colorScheme}
          pr={sizeConfig[size].width}
          bg={bg}
          {...props}
        />

        {/* If handle submit function is provided we show a button. */}
        {handleSubmit && (
          <InputRightElement p={1} width={sizeConfig[size].width}>
            <Button
              h={sizeConfig[size].h}
              size={size}
              colorScheme={colorScheme}
              isLoading={isLoading}
              aria-label='search'
              type='submit'
              d='flex'
              // set padding top and bottom for safari, do not remove.
              py={0}
            >
              Search
            </Button>
          </InputRightElement>
        )}
      </InputGroup>

      {/* Button that toggles out input if in responsive mode. */}
      {isResponsive && (
        <IconButton
          display={['flex', 'none']}
          size={size}
          top={0}
          right={0}
          ml={4}
          aria-label={'Open search input'}
          icon={showInput ? <IoClose /> : <FaSearch />}
          colorScheme={colorScheme}
          variant={buttonVariant || 'outline'}
          onClick={() => setShowInput(!showInput)}
          isActive={showInput}
        />
      )}
    </Flex>
  );
};
