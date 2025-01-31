import React from 'react';
import {
  Checkbox,
  Flex,
  Text,
  CheckboxProps,
  Skeleton,
} from 'nde-design-system';
import { formatNumber } from 'src/utils/helpers';

export interface FiltersCheckboxProps extends CheckboxProps {
  displayTerm: string; // term used for display
  value: string; // unique checkbox value.
  count?: number;
  isLoading: boolean;
  isCountUpdating?: boolean;
}

export const FiltersCheckbox: React.FC<FiltersCheckboxProps> = React.memo(
  ({ displayTerm, count, value, isCountUpdating, isLoading }) => {
    return (
      <Checkbox
        w='100%'
        spacing={3}
        size='lg'
        value={value}
        my={2}
        sx={{ '.chakra-checkbox__label': { width: '100%' } }}
      >
        <Skeleton
          width='100%'
          h={isLoading ? 4 : 'unset'}
          isLoaded={!isLoading}
          flex={1}
        >
          <Flex width='100%' alignItems='center'>
            <Text
              fontSize='xs'
              lineHeight={1.5}
              opacity={count ? 1 : 0.7}
              display='flex'
              w='100%'
              justifyContent='space-between'
            >
              {displayTerm}
              {typeof count !== 'undefined' && (
                <Skeleton
                  as='span'
                  px={isCountUpdating ? 3 : 'unset'}
                  isLoaded={!isCountUpdating}
                  ml={1}
                >
                  <Text as='span' fontWeight='semibold'>
                    {count ? `${formatNumber(count)}` : '0 '}
                  </Text>
                </Skeleton>
              )}
            </Text>
          </Flex>
        </Skeleton>
      </Checkbox>
    );
  },
);
