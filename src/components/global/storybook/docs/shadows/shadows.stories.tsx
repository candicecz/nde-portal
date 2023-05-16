import React from 'react';
import {
  PageContainer,
  SectionContainer,
  SectionHeader,
} from 'global/storybook/components/section';
import { ShadowStyles } from './shadow-styles';

export default {
  title: 'Foundations/Shadows',
};

export const Shadows = () => (
  <PageContainer>
    <SectionHeader>Shadows</SectionHeader>
    <SectionContainer px={0} py={0}>
      <ShadowStyles />
    </SectionContainer>
  </PageContainer>
);
