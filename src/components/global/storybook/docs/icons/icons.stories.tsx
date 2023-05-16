import React from 'react';
import { Text, Link } from '@chakra-ui/react';
import {
  PageContainer,
  SectionContainer,
  SectionHeader,
} from 'global/storybook/components/section';
import { IconOptions } from './icons-options';

export default {
  title: 'Foundations/Icons',
};

export const Icons = () => (
  <PageContainer>
    <SectionHeader>Icons</SectionHeader>
    <Text>
      Icons from <Link variant={''}>FontAwesome</Link> are used.
    </Text>
    <SectionContainer>
      <IconOptions />
    </SectionContainer>
  </PageContainer>
);
