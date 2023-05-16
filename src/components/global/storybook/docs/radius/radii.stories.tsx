import React from 'react';
import {
  PageContainer,
  SectionContainer,
  SectionHeader,
} from 'global/storybook/components/section';
import { RadiusStyles } from './radius-styles';

export default {
  title: 'Foundations/Radius',
};

export const Radius = () => (
  <PageContainer>
    <SectionHeader>Radius</SectionHeader>
    <SectionContainer px={0} py={0}>
      <RadiusStyles />
    </SectionContainer>
  </PageContainer>
);
