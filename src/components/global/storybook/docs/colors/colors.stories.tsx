import React from 'react';
import {
  PageContainer,
  SectionContainer,
  SectionHeader,
  SectionTitle,
} from 'global/storybook/components/section';
import { BrandColors } from './brand-colors';
import { Monochrome } from './monochrome';
import { BackgroundColors } from './background-colors';
import { LinkColors, TextColors } from './text-colors';
import { StatusColors } from './status-colors';
import { BorderColors } from './border-colors';

export default {
  title: 'Foundations/Colors',
};

export const Colors = () => (
  <PageContainer>
    <SectionHeader>Color Palette</SectionHeader>
    <SectionTitle>Brand Colors</SectionTitle>
    <SectionContainer>
      <BrandColors />
    </SectionContainer>
    <SectionTitle>Monochrome</SectionTitle>
    <SectionContainer>
      <Monochrome />
    </SectionContainer>
    <SectionTitle>Background</SectionTitle>
    <SectionContainer>
      <BackgroundColors />
    </SectionContainer>
    <SectionTitle>Border Colors</SectionTitle>
    <SectionContainer>
      <BorderColors />
    </SectionContainer>
    <SectionTitle>Text Colors</SectionTitle>
    <SectionContainer>
      <TextColors />
    </SectionContainer>
    <SectionTitle>Link Colors</SectionTitle>
    <SectionContainer>
      <LinkColors />
    </SectionContainer>
    <SectionTitle>Status and Alerts Colors</SectionTitle>
    <SectionContainer>
      <StatusColors />
    </SectionContainer>
  </PageContainer>
);
