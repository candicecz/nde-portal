import React from 'react';
import {
  PageContainer,
  SectionContainer,
  SectionHeader,
} from 'global/storybook/components/section';
import { SpaceStyles } from './space-styles';

export default {
  title: 'Foundations/Spacing',
};

export const Spacing = () => (
  <PageContainer>
    <SectionHeader>Spacing</SectionHeader>
    <SectionContainer px={0}>
      <SpaceStyles />
    </SectionContainer>
  </PageContainer>
);
