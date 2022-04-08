import React from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  BoxProps,
  Icon,
  Skeleton,
} from 'nde-design-system';
import {StyledSectionHead, StyledSectionHeading} from './styles';
import {IconType} from 'react-icons';
import {FaMinus, FaPlus} from 'react-icons/fa';
import {VscJson} from 'react-icons/vsc';
import {GrTextAlignFull} from 'react-icons/gr';
import {FaDatabase, FaDownload, FaRegMoneyBillAlt} from 'react-icons/fa';
import {BsBlockquoteLeft} from 'react-icons/bs';

interface SectionProps extends BoxProps {
  id: string;
  name?: string;
  color?: string;
  bg?: string;
  isCollapsible?: boolean;
  isDefaultOpen?: boolean;
  isLoading?: boolean;
}

const Section: React.FC<SectionProps> = ({
  id,
  isLoading,
  name,
  children,
  color,
  bg,
  isCollapsible = false,
  isDefaultOpen = true,
  ...props
}) => {
  const Content = () => {
    return (
      <Skeleton
        isLoaded={!isLoading}
        height={isLoading ? '200px' : 'unset'}
        p={4}
        {...props}
      >
        {children}
      </Skeleton>
    );
  };

  // Show an icon for the section if available
  const SectionIcon = () => {
    let icon;
    if (id === 'description') {
      icon = GrTextAlignFull;
    }
    if (id === 'metadata') {
      icon = VscJson;
    }
    if (id === 'provenance') {
      icon = FaDatabase;
    }
    if (id === 'downloads') {
      icon = FaDownload;
    }
    if (id === 'funding') {
      icon = FaRegMoneyBillAlt;
    }
    if (id === 'citedBy') {
      icon = BsBlockquoteLeft;
    }
    return icon ? (
      <Icon as={icon} boxSize={4} color='text.heading' mr={4} />
    ) : (
      <></>
    );
  };

  // if collapsible, the section is an accordion with the section name as the button.
  if (isCollapsible) {
    return (
      <section id={id} style={{padding: 0}}>
        <Accordion allowToggle defaultIndex={isDefaultOpen ? 0 : undefined}>
          <AccordionItem borderColor='transparent'>
            {({isExpanded}) => (
              <>
                {name && (
                  <h2>
                    <AccordionButton
                      aria-label={`show more details about ${name}`}
                      bg={bg || isExpanded ? 'page.alt' : 'white'}
                      color={color}
                      borderY='0.5px solid'
                      borderColor='gray.100'
                      borderLeft='3px solid'
                      borderLeftColor='accent.bg'
                      _hover={{bg: props?._hover?.bg || 'page.alt'}}
                      _expanded={{
                        borderColor: 'page.alt',
                      }}
                    >
                      <SectionIcon />
                      {name && (
                        <StyledSectionHeading flex={1} textAlign='left'>
                          {name}
                        </StyledSectionHeading>
                      )}
                      <Icon as={isExpanded ? FaMinus : FaPlus} fontSize='xs' />
                    </AccordionButton>
                  </h2>
                )}
                <AccordionPanel>
                  <Content />
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </section>
    );
  }

  return (
    <section id={id} style={{padding: 0}}>
      {name && (
        <StyledSectionHead color={color} px={4}>
          <StyledSectionHeading>
            <SectionIcon />
            {name}
          </StyledSectionHeading>
        </StyledSectionHead>
      )}

      <Content />
    </section>
  );
};
export default Section;
