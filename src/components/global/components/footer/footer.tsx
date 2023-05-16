import React from 'react';
import {
  Box,
  Flex,
  Stack,
  SimpleGrid,
  Heading,
  Icon,
  Image,
  useBreakpointValue,
  TextProps,
  UnorderedList,
  ListItem,
  HeadingProps,
  ListProps,
} from '@chakra-ui/react';
import { FaChevronRight, FaGithub, FaRegEnvelope } from 'react-icons/fa';
import styled from '@emotion/styled';
import { Link, LinkProps } from '../link';
import VerticalMobileLogo from '../../assets/logos/niaid-data-ecosystem-logo_mobile-vertical--white.svg';
import MobileLogo from '../../assets/logos/niaid-data-ecosystem-logo_mobile-preferred--white.svg';
import DesktopLogo from '../../assets/logos/niaid-data-ecosystem-logo_desktop--white.svg';
import footerConfig from './footer.config.json';

// Styled links for footer section
export const StyledLink = styled(Link)<LinkProps>(() => ({}));

StyledLink.defaultProps = {
  display: 'inline',
  my: 0,
  color: 'white',
  _visited: { color: 'white' },
  _hover: { color: 'white' },
};

interface FooterLinkProps extends LinkProps {
  href: string;
  isExternal?: boolean;
}

// Links in footer.
const FooterLink: React.FC<FooterLinkProps> = ({
  children,
  isExternal,
  href,
  ...props
}) => {
  // Icon for local links.
  return (
    <Box
      mt={1}
      mb={3}
      _hover={{
        svg: {
          opacity: '100%',
          transform: 'translateX(0)',
          transition: 'all .3s ease',
        },
      }}
    >
      <StyledLink href={href} isExternal={isExternal ?? false} {...props}>
        {children}
      </StyledLink>
      {!isExternal && (
        <Icon
          as={FaChevronRight}
          boxSize={3}
          ml={2}
          color='accent.bg'
          transform='translate(-5px)'
          transition='all .3s ease'
        ></Icon>
      )}
    </Box>
  );
};

// Header for footer section
export interface ListHeaderProps extends TextProps {}
const ListHeader: React.FC<ListHeaderProps> = ({ children, ...props }) => {
  return (
    <Heading
      as='h2'
      size='h5'
      fontFamily='body'
      color='white'
      fontWeight='medium'
      {...props}
    >
      {children}
    </Heading>
  );
};

export interface FooterItem {
  label: string;
  type?: string;
  routes?: FooterItem[];
  href?: string;
  subLabel?: string;
  isExternal?: boolean;
}

export interface FooterProps {
  navigation: {
    href: string;
    contact: FooterItem;
    routes: FooterItem[];
    lastUpdate?: FooterItem[];
  };
}

const LastUpdatedDetails = ({ lastUpdate }: { lastUpdate: FooterItem }) => {
  if (!lastUpdate) {
    return null;
  }
  return (
    <Flex
      alignItems='center'
      px={4}
      mt={{ base: 1, md: 0 }}
      mb={{ base: 3, md: 0 }}
    >
      <StyledLink
        href={lastUpdate.href}
        fontSize='sm'
        w='unset'
        isExternal={lastUpdate.isExternal}
        whiteSpace='nowrap'
      >
        {lastUpdate.label}
      </StyledLink>
    </Flex>
  );
};

// Contact Links such as social media, email etc.
const ContactUs = ({
  contact,
}: {
  contact: FooterProps['navigation']['contact'];
}) => {
  if (!contact) {
    return null;
  }

  return (
    <>
      {/* Contact Links */}
      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems={{ base: 'start', md: 'center' }}
      >
        {contact?.routes &&
          contact.routes.map(route => {
            if (!route.href) {
              return;
            }
            const { label, type, href, isExternal } = route;
            return (
              <Flex
                key={label}
                alignItems='center'
                px={4}
                mt={{ base: 1, md: 0 }}
                mb={{ base: 3, md: 0 }}
              >
                {type?.toLowerCase().includes('email') && (
                  <Icon as={FaRegEnvelope} boxSize={3} mx={2}></Icon>
                )}
                {type?.toLowerCase().includes('github') && (
                  <Icon as={FaGithub} boxSize={4} mx={2}></Icon>
                )}
                <StyledLink
                  href={href}
                  fontSize='sm'
                  w='unset'
                  isExternal={isExternal}
                  whiteSpace='nowrap'
                >
                  {label}
                </StyledLink>
              </Flex>
            );
          })}
      </Flex>
    </>
  );
};

export const Footer: React.FC<FooterProps> = ({ navigation }) => {
  const navigationSections = navigation?.routes || footerConfig.routes;

  const screenSize = useBreakpointValue({
    base: 'mobile-small',
    sm: 'mobile',
    lg: 'desktop',
  });

  interface SubList {
    label: string;
    routes?: FooterItem[];
    listProps?: ListProps;
    headingProps?: HeadingProps;
  }
  const SubList: React.FC<SubList> = ({
    label,
    routes,
    listProps,
    headingProps,
  }) => {
    return (
      <>
        <ListHeader
          as='h3'
          size='md'
          mb={3}
          color='whiteAlpha.800'
          {...headingProps}
        >
          {label}
        </ListHeader>
        <UnorderedList ml={0} {...listProps}>
          {routes &&
            routes.map(route => {
              if (route.routes) {
                return (
                  <SubList
                    key={route.label}
                    label={route.label}
                    routes={route.routes}
                    headingProps={{
                      as: 'h4',
                      size: 'sm',
                    }}
                  />
                );
              }
              return (
                <ListItem key={route.label}>
                  {route.href && (
                    <FooterLink
                      href={route.href}
                      isExternal={route.isExternal ?? false}
                      variant='ghost'
                    >
                      {route.label}
                    </FooterLink>
                  )}
                </ListItem>
              );
            })}
        </UnorderedList>
      </>
    );
  };
  return (
    <Box
      as='footer'
      bg='gray.900'
      color='white'
      borderTop='0.25rem solid'
      borderColor='accent.bg'
      minW='300px'
      display={['block', 'block', 'block', 'flex']}
      flexDirection='column'
    >
      <Stack p={8} alignItems={['center', 'center', 'start']} margin={'0 auto'}>
        <Box w='100%'>
          {navigation && navigation.href ? (
            <Link
              display='flex'
              alignItems='center'
              href={navigation['href']}
              variant='unstyled'
            >
              <Image
                src={
                  screenSize === 'mobile'
                    ? MobileLogo
                    : screenSize === 'mobile-small'
                    ? VerticalMobileLogo
                    : DesktopLogo
                }
                alt='NIAID Data Ecosystem logo'
                h={
                  screenSize === 'mobile'
                    ? '28px'
                    : screenSize === 'mobile-small'
                    ? '56px'
                    : '40px'
                }
              ></Image>
            </Link>
          ) : (
            <Image
              src={
                screenSize === 'mobile'
                  ? MobileLogo
                  : screenSize === 'mobile-small'
                  ? VerticalMobileLogo
                  : DesktopLogo
              }
              alt={'NIAID Data Ecosystem logo'}
              h={
                screenSize === 'mobile'
                  ? '28px'
                  : screenSize === 'mobile-small'
                  ? '56px'
                  : '40px'
              }
            ></Image>
          )}
        </Box>
        <SimpleGrid
          minChildWidth={{
            base: '100%',
            md: `${100 / navigationSections.length}%`,
            lg: `${1000 / navigationSections.length}px`,
          }}
          maxW='6xl'
          w='100%'
        >
          {navigationSections.map((section, i) => {
            return (
              <Box key={i} flex={i === 0 ? 2 : 1}>
                {section.label && (
                  <ListHeader mt={8}>{section.label}</ListHeader>
                )}
                <UnorderedList ml={0} my={4}>
                  {section.routes &&
                    section.routes.map(
                      ({ href, label, routes, isExternal }) => {
                        return (
                          <ListItem key={label} align='flex-start'>
                            {href ? (
                              <FooterLink
                                href={href}
                                isExternal={isExternal ?? false}
                                variant='ghost'
                              >
                                {label}
                              </FooterLink>
                            ) : (
                              <SubList label={label} routes={routes} />
                            )}
                          </ListItem>
                        );
                      },
                    )}
                </UnorderedList>
              </Box>
            );
          })}
        </SimpleGrid>
      </Stack>
      <Box
        borderTopWidth={1}
        borderStyle='solid'
        bg='text.heading'
        borderColor='gray.700'
      >
        <Flex
          maxW='unset'
          px={{ base: 0, sm: 4 }}
          py={{ base: 4, sm: 8, md: 4 }}
          flexDirection={{ base: 'column', md: 'row' }}
          align={{ md: 'center' }}
          justify={{ md: 'space-between' }}
        >
          {navigation && navigation.contact && (
            <ContactUs contact={navigation.contact} />
          )}

          <Flex flexDirection={{ base: 'column', md: 'row' }}>
            {navigation &&
              navigation.lastUpdate &&
              navigation.lastUpdate.map(updateInfo => {
                return (
                  <LastUpdatedDetails
                    key={updateInfo.label}
                    lastUpdate={updateInfo}
                  />
                );
              })}
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
