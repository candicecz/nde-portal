import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

interface VisualDescription {
  title?: string;
  description?: string;
}

// Text component used to describe different design elements in storybook.
export const VisualDescription: React.FC<VisualDescription> = ({
  title,
  description,
  children,
}) => {
  return (
    <Flex as={'section'} alignItems={'center'} width={'100%'}>
      <figure aria-hidden>{children}</figure>
      <Box ml={2} minWidth={'200px'}>
        {title && (
          <Heading size='xs' fontFamily={'body'}>
            {title}
          </Heading>
        )}
        {description && (
          <Text fontSize={'sm'} color={'text.body'} isTruncated>
            {description}
          </Text>
        )}
      </Box>
    </Flex>
  );
};
