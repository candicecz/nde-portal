import React from 'react';
import {
  Box,
  BoxProps,
  Center,
  Divider,
  Flex,
  FlexProps,
  Select,
  SelectProps,
  Skeleton,
  StylesProvider,
  Text,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import { IconButton } from '../button';
import {
  FaCaretDown,
  FaCaretUp,
  FaChevronLeft,
  FaChevronRight,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from 'react-icons/fa';

// Based on NIAID's Table Styles
// https://designsystem.niaid.nih.gov/components/atoms

// Table wrapper.
export interface TableWrapperProps extends BoxProps {
  variant?: string;
  colorScheme?: SelectProps['colorScheme'];
}

// Format number with thousands separator
const formatNumber = (number: number, separator = ',') => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
};

export const TableWrapper: React.FC<TableWrapperProps> = ({
  children,
  variant,
  colorScheme,
  ...props
}) => {
  const styles = useMultiStyleConfig('Table', { variant, colorScheme });

  return (
    <Box __css={styles.wrapper} {...props}>
      <StylesProvider value={styles}>{children}</StylesProvider>
    </Box>
  );
};

export interface TablePaginationProps extends FlexProps {
  /**
   * Total number of data.
   */
  total: number;

  /**
   * Number of rows to display on each page.
   */
  size: number;

  /**
   * Update the number of rows to display
   */
  setSize: (n: number) => void;

  /**
   * Page number on which to start.
   */
  from: number;

  /**
   * Update page number on which to start.
   */
  setFrom: (n: number) => void;

  /**
   * Color scheme for table. Defaults to gray.
   */
  colorScheme?: SelectProps['colorScheme'];

  /**
   * Options for number of rows to show per page.
   */
  pageSizeOptions: number[];

  /**
   * Optional setting for when the number of pages to display is different than the total number of results. (i.e. more than 10 000)
   */
  numPages?: number;

  /**
   * Loading state for loading indicator.
   */
  isLoading?: boolean;
}

export const TablePagination: React.FC<TablePaginationProps> = ({
  total,
  size,
  setSize,
  from,
  setFrom,
  pageSizeOptions,
  colorScheme,
  isLoading,
  numPages: totalPages,
  ...props
}) => {
  const styles = useMultiStyleConfig('Table', { colorScheme });
  const numPages =
    totalPages !== undefined ? totalPages : Math.ceil(total / size);

  const ArrowButton = ({
    ariaLabel,
    icon,
    isDisabled,
    handleClick,
  }: {
    ariaLabel: string;
    icon: React.ReactElement;
    isDisabled: boolean;
    handleClick: () => void;
  }) => {
    return (
      <IconButton
        colorScheme={colorScheme}
        size='sm'
        aria-label={ariaLabel}
        icon={icon}
        variant='outline'
        isDisabled={isDisabled}
        onClick={handleClick}
        mx={0.5}
        display={['none', 'flex']}
      ></IconButton>
    );
  };

  return (
    <Flex __css={styles.pagination} {...props}>
      <Flex
        p={4}
        bg='page.alt'
        w='100%'
        justifyContent='space-between'
        flexDirection={['column', 'row']}
      >
        {/* Select options for displaying per page rows */}
        <Flex pb={[4, 0]} flex={[1, 'unset']} flexDirection={['column', 'row']}>
          <Text fontSize='sm'>Rows per page: </Text>
          {/* Display row options by increments of 5. */}
          <Select
            value={size}
            onChange={e => {
              setSize(+e.currentTarget.value);
              setFrom(0);
            }}
            size='sm'
            colorScheme={colorScheme}
            mx={[0, 2]}
            cursor='pointer'
            bg='white'
            aria-label={'Select number of rows per page'}
          >
            {pageSizeOptions.map((pageSizeOption, i) => {
              return (
                <option key={i} value={pageSizeOption}>
                  {pageSizeOption}
                </option>
              );
            })}
          </Select>
        </Flex>

        {/* Navigation for pages. */}
        <Flex flex={[1, 'unset']} flexDirection={['column', 'row']}>
          <ArrowButton
            icon={<FaAngleDoubleLeft />}
            ariaLabel='Go to first page.'
            isDisabled={from === 0}
            handleClick={() => setFrom(0)}
          ></ArrowButton>
          <ArrowButton
            icon={<FaChevronLeft />}
            ariaLabel='Go to previous page.'
            isDisabled={from === 0}
            handleClick={() => setFrom(from - 1)}
          ></ArrowButton>
          <Select
            value={from}
            onChange={e => setFrom(+e.currentTarget.value)}
            size='sm'
            colorScheme={colorScheme}
            mx={[0, 4]}
            my={[2, 0]}
            cursor='pointer'
            bg='white'
            aria-label={'Select page'}
          >
            {Array.from(Array(numPages)).map((_, i) => {
              return (
                <option key={i} value={i}>
                  Page {i + 1}
                </option>
              );
            })}
          </Select>
          <ArrowButton
            icon={<FaChevronRight />}
            ariaLabel='Go to next page.'
            isDisabled={from + 1 === numPages}
            handleClick={() => setFrom(from + 1)}
          ></ArrowButton>
          <ArrowButton
            icon={<FaAngleDoubleRight />}
            ariaLabel='Go to last page.'
            isDisabled={from + 1 === numPages}
            handleClick={() => setFrom(numPages - 1)}
          ></ArrowButton>
        </Flex>
      </Flex>

      {/* Display of what is currently showing. */}
      <Flex
        alignItems='center'
        justifyContent='flex-end'
        w='100%'
        bg='white'
        p={4}
      >
        <Skeleton isLoaded={!isLoading}>
          <Text fontSize='sm'>
            Page {formatNumber(from + 1)} of {formatNumber(numPages)}
          </Text>
        </Skeleton>
        <Center display={'flex'} h='20px' mx={2}>
          <Divider orientation='vertical' />
        </Center>
        <Skeleton isLoaded={!isLoading}>
          <Text fontSize='sm'>
            {formatNumber(total)} {total > 1 ? 'items' : 'item'}
          </Text>
        </Skeleton>
      </Flex>
    </Flex>
  );
};

// Toggle rows sort order buttons. Should be put in header cells (Th).
export const TableSortToggle = ({
  isSelected,
  sortBy,
  handleToggle,
}: {
  isSelected: boolean;
  sortBy: 'ASC' | 'DESC';
  handleToggle: (sortByAsc: boolean) => void;
}) => {
  return (
    <Flex display='inline-flex' ml={2}>
      <IconButton
        icon={<FaCaretUp />}
        aria-label='sort table column ascending'
        ml={1}
        colorScheme='gray'
        variant='ghost'
        size='xs'
        color={isSelected && sortBy === 'ASC' ? 'inherit' : 'gray.200'}
        onClick={() => handleToggle(true)}
      />
      <IconButton
        icon={<FaCaretDown />}
        aria-label='sort table column descending'
        ml={1}
        colorScheme='gray'
        size='xs'
        variant='ghost'
        color={isSelected && sortBy === 'DESC' ? 'inherit' : 'gray.200'}
        onClick={() => handleToggle(false)}
      />
    </Flex>
  );
};
