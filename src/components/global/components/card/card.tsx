import React, { Children } from 'react';
import {
  Heading,
  Flex,
  StylesProvider,
  Box,
  BoxProps,
  HeadingProps,
  useMultiStyleConfig,
  useStyles,
} from '@chakra-ui/react';

// Based on NIAID's Search Result Card Style
// https://designsystem.niaid.nih.gov/components/molecules

export interface CardProps extends BoxProps {
  variant?: string;
}

export const Card: React.FC<CardProps> = ({ children, variant, ...props }) => {
  const styles = useMultiStyleConfig('Card', { variant });
  return (
    <Box __css={styles.container} {...props}>
      <StylesProvider value={styles}>{children}</StylesProvider>
    </Box>
  );
};

export const CardHeader: React.FC<BoxProps> = ({ children, ...props }) => {
  const styles = useStyles();
  return (
    <Box __css={styles.header} {...props}>
      {children}
    </Box>
  );
};

export const CardBody: React.FC<BoxProps> = ({ children, ...props }) => {
  const styles = useStyles();

  return (
    <Box __css={styles.body} {...props}>
      {children}
    </Box>
  );
};

export const CardFooter: React.FC<BoxProps> = ({ children, ...props }) => {
  const styles = useStyles();

  return (
    <Box __css={styles.footer} {...props}>
      {children}
    </Box>
  );
};

export const CardTitle: React.FC<HeadingProps> = ({ children, ...props }) => {
  return (
    <Heading fontWeight='semibold' size='h5' color='inherit' {...props}>
      {children}
    </Heading>
  );
};

export interface CardActionsProps extends BoxProps {}

export const CardActions: React.FC<CardActionsProps> = ({
  children,
  ...props
}) => {
  if (Children.count(children) === 1) {
    return (
      <Flex flex={1} justifyContent='end' {...props}>
        {children}
      </Flex>
    );
  }

  return (
    <Flex flex={1} justifyContent='space-between' {...props}>
      {children}
    </Flex>
  );
};
