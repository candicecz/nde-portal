import { Text } from '@chakra-ui/react';
import React from 'react';
import {
  PageContainer,
  SectionContainer,
  SectionHeader,
  SectionTitle,
} from 'global/storybook/components/section';
import { theme } from 'src/components/global';
import { TextStyles } from './text-styles';

export default {
  title: 'Foundations/Typography',
};

export const Typography = () => {
  const { fonts } = theme;
  const formatName = (fontFamily: string) => {
    if (fontFamily.toLowerCase().includes('martel')) {
      return 'Martel';
    }
    if (fontFamily.toLowerCase().includes('public sans')) {
      return 'Public Sans';
    }
  };

  return (
    <PageContainer>
      <SectionHeader>Typography</SectionHeader>
      {Object.entries(fonts).map(([type, fontFamily]) => {
        if (type === 'body' || type === 'heading') {
          return (
            <React.Fragment key={fontFamily}>
              <SectionTitle>{formatName(fontFamily)}</SectionTitle>
              <Text color={'gray.800'} fontSize={'xs'}>
                used for: {type} text
              </Text>
              <SectionContainer>
                <TextStyles fontFamily={fontFamily} />
              </SectionContainer>
            </React.Fragment>
          );
        }
      })}
    </PageContainer>
  );
};
