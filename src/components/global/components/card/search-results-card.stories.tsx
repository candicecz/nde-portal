import React from 'react';
import { ComponentMeta } from '@storybook/react';
import {
  Box,
  Text,
  Flex,
  FlexProps,
  Button,
  Icon,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  ListItem,
  UnorderedList,
  Stat,
  StatLabel,
  Image,
} from '@chakra-ui/react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardProps,
} from './card';
import {
  FaArrowAltCircleRight,
  FaClock,
  FaMinus,
  FaPlus,
} from 'react-icons/fa';
import { ToggleContainer } from '../index';
import styled from '@emotion/styled';
import { theme } from 'src/components/global';
import { AccessBadge } from '../badge/badge.stories';
import { Heading, Link } from '../index';
import MobileLogo from '../../assets/logos/niaid-data-ecosystem-logo_mobile-preferred.svg';

export default {
  title: 'Components/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

export interface Creator {
  id: string | null; // orcid id
  type: string | null;
  affiliation: { name: string } | null;
  name: string | null;
}

export interface includedInDataCatalog {
  name?: string | null;
  url?: string | null; //source repo url
  versionDate?: string | null;
  image?: string | null;
  identifier?: string | null;
}

export interface Citation {
  id: string | null;
  url: string | null;
  name: string | null;
  author: { name: string } | null;
  journalName: string | null;
  date: string | null;
  pmid: string | null;
}
export type AccessTypes = 'restricted' | 'public' | 'controlled';

export interface SearchResultCardProps extends CardProps {
  id?: string;
  name?: string;
  author?: Creator[] | null;
  type?: string | null; // change to dataset |computational tool
  datePublished?: Date | string | null;
  description?: string | null;
  includedInDataCatalog?: includedInDataCatalog | null;
  conditionsOfAccess?: AccessTypes | null;
  doi?: string;
  license?: string | null;
  citation?: Citation[] | null;
  measurementTechnique?: string[] | null;
  variableMeasured?: string[] | null;
}

const StyledLabel = styled(Flex)<FlexProps>`
  display: inline-flex;
  line-height: 1.5;
  position: relative;
  z-index: 9;
  &:before {
    content: '';
    background-color: ${theme.colors.status.info};
    box-shadow: 0 0 0 5px #fff;
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transform: skew(-12deg);
    width: 100%;
    z-index: -4;
  }
`;
StyledLabel.defaultProps = {
  mx: 2,
  p: 2,
};

interface StyledBannerProps {
  name?: SearchResultCardProps['type'];
}

const StyledBanner: React.FC<StyledBannerProps> = ({ name, children }) => {
  return (
    <Flex flexWrap={'wrap'} p={0} my={1}>
      <Flex
        bg={'status.info_lt'}
        py={0}
        overflow={'hidden'}
        w={['100%', 'unset']}
      >
        {name && (
          <StyledLabel>
            <Text color={'white'} px={2} fontWeight={'semibold'}>
              {name}
            </Text>
          </StyledLabel>
        )}
      </Flex>
      <Flex
        bg={'status.info_lt'}
        py={1}
        overflow={'hidden'}
        w={['100%', 'unset']}
        flex={['unset', 1]}
        px={4}
      >
        {children}
      </Flex>
    </Flex>
  );
};

export const SearchResultCardExample = (
  args: JSX.IntrinsicAttributes &
    CardProps &
    SearchResultCardProps & {
      children?: React.ReactNode;
    },
) => {
  return (
    <Card {...args}>
      <CardHeader>
        <CardTitle>{args.name}</CardTitle>
      </CardHeader>
      <Flex p={0} flexDirection={['column', 'row']}>
        <ToggleContainer
          variant={'border'}
          ariaLabel={'Show all authors.'}
          noOfLines={1}
          my={0}
          mx={1}
        >
          {args.author?.map(a => {
            return a.name + ' ; ';
          })}
        </ToggleContainer>
        <Box
          d={['inline-flex', 'block']}
          justifyContent={['end']}
          alignContent='center'
          borderY={`1px solid`}
          borderColor={['transparent', 'gray.200']}
          m={1}
        >
          {args.conditionsOfAccess && (
            <AccessBadge conditionsOfAccess={args.conditionsOfAccess}>
              Public
            </AccessBadge>
          )}
        </Box>
      </Flex>
      <StyledBanner name={args.type}>
        {args.datePublished && (
          <Flex alignItems={'center'}>
            <Icon as={FaClock} mr={2}></Icon>
            <Text fontWeight={'semibold'}>
              Published on {args.datePublished}
            </Text>
          </Flex>
        )}
      </StyledBanner>
      {args.description && (
        <CardBody px={0}>
          <ToggleContainer
            ariaLabel={'show more description'}
            noOfLines={[3, 10]}
            borderColor={'transparent'}
            m={1}
          >
            <Box
              w='100%'
              dangerouslySetInnerHTML={{
                __html: args.description,
              }}
            ></Box>
          </ToggleContainer>
        </CardBody>
      )}
      {(args.license || args.measurementTechnique || args.variableMeasured) && (
        <Accordion allowToggle p={0} pt={1}>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton
                    px={[6, 8]}
                    bg={isExpanded ? 'blackAlpha.100' : 'white'}
                  >
                    <Box flex='1' textAlign='left'>
                      <Heading fontSize={'h6'} fontWeight={'semibold'}>
                        Details
                      </Heading>
                    </Box>
                    {isExpanded ? (
                      <Icon as={FaMinus} fontSize='12px' />
                    ) : (
                      <Icon as={FaPlus} fontSize='12px' />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel w='100%' px={[6, 8]}>
                  <UnorderedList ml={0}>
                    {args.license && (
                      <ListItem>
                        <Stat my={2}>
                          <StatLabel color={'gray.700'}>License</StatLabel>
                          <Link href={args.license} isExternal>
                            {args.license}
                          </Link>
                        </Stat>
                      </ListItem>
                    )}
                    {args.measurementTechnique && (
                      <ListItem>
                        <Stat my={2}>
                          <StatLabel color={'gray.700'}>
                            Measurement Technique
                          </StatLabel>
                          <Text fontWeight='semibold'>
                            {args.measurementTechnique}
                          </Text>
                        </Stat>
                      </ListItem>
                    )}
                    {args.variableMeasured && (
                      <ListItem>
                        <Stat my={2}>
                          <StatLabel color={'gray.700'}>
                            Variable Measured
                          </StatLabel>
                          <Text fontWeight='semibold'>
                            {args.variableMeasured}
                          </Text>
                        </Stat>
                      </ListItem>
                    )}
                  </UnorderedList>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      )}
      <CardFooter
        justifyContent={'space-between'}
        alignItems={'flex-end'}
        flexWrap='wrap'
      >
        {args.includedInDataCatalog && (
          <Box>
            {args.includedInDataCatalog.name && (
              <Image
                w={'200px'}
                src={MobileLogo}
                alt={'source repository logo'}
              ></Image>
            )}
            {args.includedInDataCatalog.url && (
              <Button
                as={Link}
                href={args.includedInDataCatalog.url}
                target='_blank'
                isExternal
                variant={'outline'}
                colorScheme={'primary'}
                mt={[2, 2, 4]}
              >
                {args.includedInDataCatalog.name || 'Source'}
              </Button>
            )}
          </Box>
        )}
        {args.id && (
          <Button
            as={Link}
            href={'/dataset.id'}
            variant={'solid'}
            colorScheme={'primary'}
            mt={[2, 2, 4]}
            alignItems={'center'}
            rightIcon={<FaArrowAltCircleRight />}
          >
            See more
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

SearchResultCardExample.args = {
  id: 'dataset.id',
  children: 'with body text',
  variant: 'colorful',
  name: 'Resource Title: Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  type: 'Dataset',
  datePublished: '2021-10-22',
  author: [
    {
      affiliation: 'Fred Hutchinson Cancer Research Center',
      '@id': 'https://orcid.org/0000-0002-2662-9427',
      name: 'Gilbert, Peter B',
    },
    {
      affiliation: 'Fred Hutchinson Cancer Research Center',
      '@id': 'https://orcid.org/0000-0002-4230-6863',
      name: 'Fong, Youyi',
    },
    {
      affiliation: 'Emory University',
      '@id': 'https://orcid.org/0000-0002-1019-8343',
      name: 'Benkeser, David',
    },
    {
      affiliation: 'University of California, Berkeley',
      '@id': 'https://orcid.org/0000-0002-7127-2789',
      name: 'Hejazi, Nima S',
    },
    {
      affiliation: 'Fred Hutchinson Cancer Research Center',
      name: 'Hughes, Ellis',
    },
    {
      affiliation: 'Fred Hutchinson Cancer Research Center',
      name: 'Borate, Bhavesh R',
    },
    {
      affiliation: 'Fred Hutchinson Cancer Research Center',
      name: 'Yu, Chenchen',
    },
    {
      affiliation: 'Fred Hutchinson Cancer Research Center',
      name: 'Lu, Yiwen',
    },
    {
      affiliation: 'University of Washington',
      name: 'Li, Kendrick Qijun',
    },
    {
      affiliation: 'University of Washington',
      name: 'van der Laan, Lars WP',
    },
    {
      affiliation: 'Fred Hutchinson Cancer Research Center',
      name: 'Simpkins, Brian',
    },
  ],
  description:
    '<p>Reproducible reporting workflows for the immune correlates statistical analyses of the Moderna and Janssen COVID-19 vaccine efficacy trials by the USG/COVE Response Biostatistics Teams. Analyses match those reported in the manuscript at https://www.medrxiv.org/content/10.1101/2021.08.09.21261290v4 and the statistical analysis plan available at https://figshare.com/articles/online_resource/CoVPN_OWS_COVID-19_Vaccine_Efficacy_Trial_Immune_Correlates_SAP/13198595</p>',
  license: 'https://opensource.org/licenses/GPL-2.0',
  conditionsOfAccess: 'public',
  measurementTechnique: 'Non-coding RNA profiling by array',
  variableMeasured: 'n/a',
  doi: '10.5281/zenodo.5593130',
  includedInDataCatalog: {
    name: 'Zenodo',
    url: 'https://zenodo.org/record/5593131',
  },
};
