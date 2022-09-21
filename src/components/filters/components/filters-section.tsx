import React from 'react';
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  Heading,
} from 'nde-design-system';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { MetadataIcon, MetadataToolTip } from 'src/components/icon';
import { getMetadataColor } from 'src/components/icon/helpers';

/*
[COMPONENT INFO]:
Filter drawer corresponding to a filter facet.
*/

interface FiltersSectionProps {
  name: string;
  icon?: string;
}

export const FiltersSection: React.FC<FiltersSectionProps> = React.memo(
  ({ name, icon, children }) => {
    return (
      <AccordionItem borderColor='page.alt' borderTopWidth='2px'>
        {({ isExpanded }) => {
          return (
            <>
              <h2>
                {/* Toggle expand panel open. */}
                <AccordionButton
                  borderLeft='4px solid'
                  borderColor='gray.200'
                  py={4}
                  transition='all 0.2s linear'
                  _expanded={{
                    borderColor: 'accent.bg',
                    py: 2,
                    transition: 'all 0.2s linear',
                  }}
                >
                  {/* Filter Name */}
                  <Flex
                    flex='1'
                    textAlign='left'
                    justifyContent='space-between'
                    alignItems='center'
                  >
                    <Heading size='sm' fontWeight='semibold'>
                      {name}
                    </Heading>

                    {/* Icon tooltip with property definition. */}
                    {icon && (
                      <MetadataToolTip propertyName={icon}>
                        <MetadataIcon
                          id={`filter-${icon}`}
                          mx={2}
                          glyph={icon}
                          fill={getMetadataColor(icon)}
                          boxSize={6}
                        ></MetadataIcon>
                      </MetadataToolTip>
                    )}
                  </Flex>
                  {isExpanded ? (
                    <FaMinus fontSize='12px' />
                  ) : (
                    <FaPlus fontSize='12px' />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel
                px={2}
                py={4}
                borderLeft='4px solid'
                borderColor='accent.bg'
              >
                {children}
              </AccordionPanel>
            </>
          );
        }}
      </AccordionItem>
    );
  },
);
