import React from 'react';
import {
  Box,
  Button,
  Flex,
  Text,
  Stack,
  Collapse,
  Image,
  Icon,
  Popover,
  PopoverArrow,
  PopoverTrigger,
  PopoverContent,
  useBreakpointValue,
  useDisclosure,
  PopoverBody,
  FlexProps,
} from '@chakra-ui/react';
import { FaCaretDown, FaChevronRight, FaChevronDown } from 'react-icons/fa';
import { IoClose, IoMenu } from 'react-icons/io5';
import { Link } from '../link';
import VerticalMobileLogo from '../../assets/logos/niaid-data-ecosystem-logo_mobile-vertical--white.svg';
import MobileLogo from '../../assets/logos/niaid-data-ecosystem-logo_mobile-preferred--white.svg';
import DesktopLogo from '../../assets/logos/niaid-data-ecosystem-logo_desktop--white.svg';
import { IconButton } from '../button';

interface RouteProps {
  label: string;
  subLabel?: string;
  routes?: Array<RouteProps>;
  href?: string;
  isExternal?: boolean;
}

export interface NavigationProps extends FlexProps {
  navigation?: { href?: string; routes: RouteProps[] };
  bg?: string;
}

// Mobile Navigation link styles
export const MobileNavItem = ({
  label,
  routes,
  href,
  isExternal,
}: RouteProps) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack w='100%' spacing={2} onClick={routes && onToggle} cursor='pointer'>
      {href ? (
        <Link
          px={4}
          py={2}
          href={href}
          w='100%'
          color='tertiary.800'
          variant='unstyled'
          rounded='md'
          _hover={{
            bg: 'tertiary.50',
            color: 'tertiary.600',
            '.label': { color: 'tertiary.600' },
            '.icon': { opacity: '100%', transform: 'translateX(0)' },
          }}
          _visited={{ color: 'tertiary.800' }}
          target={isExternal ? '_blank' : '_self'}
        >
          <Flex opacity={1} justify='space-between' align='center'>
            <Text fontWeight={600}>{label}</Text>
            <Icon
              className='icon'
              ml='10px'
              transform='translateX(-10px)'
              transition='all .3s ease'
              sx={{
                '> *': { color: 'tertiary.700' },
              }}
              w={3}
              h={3}
              as={FaChevronRight}
            />
          </Flex>
        </Link>
      ) : (
        <Flex
          px={4}
          py={2}
          justify='space-between'
          align='center'
          w='100%'
          color='gray.900'
          rounded='md'
          _hover={{
            bg: 'tertiary.50',
            color: 'gray.900',
          }}
        >
          <Flex justify='space-between' align='center'>
            <Text fontWeight={600} color='gray.700'>
              {label}
            </Text>
          </Flex>
          {routes && (
            <Icon
              sx={{
                '> *': { color: 'tertiary.700' },
              }}
              as={FaChevronDown}
              transition={'all .25s ease-in-out'}
              transform={
                isOpen
                  ? 'translateX(-10px) rotate(180deg)'
                  : 'translateX(-10px)'
              }
              w={3}
              h={3}
            />
          )}
        </Flex>
      )}

      <Box>
        <Collapse in={isOpen} animateOpacity>
          <Stack
            mt={0}
            pl={2}
            ml={2}
            borderLeft={2}
            borderStyle='solid'
            borderColor='gray.200'
            align='start'
          >
            {routes &&
              routes.map(route => {
                return <MobileNavItem key={route.href} {...route} />;
              })}
          </Stack>
        </Collapse>
      </Box>
    </Stack>
  );
};

// Desktop Navigation link styles
export const DesktopNavItem = ({
  label,
  routes,
  href,
  isExternal,
}: RouteProps) => {
  if (!routes) {
    return (
      <Link
        px={2}
        href={href ?? '#'}
        fontSize='md'
        fontWeight={500}
        color='white'
        _visited={{ color: 'white' }}
        _hover={{
          opacity: 0.85,
          color: 'white',
        }}
        variant='unstyled'
        cursor='pointer'
        alignItems='center'
        whiteSpace='nowrap'
        d='flex'
        h='100%'
        justifyContent='center'
        target={isExternal ? '_blank' : '_self'}
      >
        {label}
      </Link>
    );
  }
  return (
    <>
      <Popover trigger='click' placement='bottom-start' autoFocus closeOnEsc>
        <PopoverTrigger>
          <Button
            __css={{ padding: 0 }}
            px={2}
            d='flex'
            href={href ?? '#'}
            fontSize='md'
            fontWeight={500}
            color='white'
            _visited={{ color: 'white' }}
            _hover={{
              opacity: 0.85,
              color: 'white',
            }}
            variant='unstyled'
            cursor='pointer'
            alignItems='center'
            justifyContent='center'
            h='100%'
          >
            {label}
            {routes && <Icon as={FaCaretDown} ml={1} w={4} h={4} />}
          </Button>
        </PopoverTrigger>

        {routes && (
          <PopoverContent
            border={0}
            boxShadow='xl'
            bg='white'
            py={2}
            rounded='xl'
            minW='sm'
          >
            <PopoverArrow />
            <PopoverBody>
              <Stack role='tablist'>
                {routes.map(route => (
                  <DesktopSubNav key={route.label} {...route} />
                ))}
              </Stack>
            </PopoverBody>
          </PopoverContent>
        )}
      </Popover>
    </>
  );
};

// Desktop Navigation sub menu for nested links
const DesktopSubNav = ({ label, href, subLabel, isExternal }: RouteProps) => {
  return (
    <Link
      role='tab'
      href={href}
      p={2}
      color='tertiary.800'
      variant='unstyled'
      rounded='md'
      _hover={{
        bg: 'tertiary.50',
        color: 'tertiary.600',
        '.label': { color: 'tertiary.600' },
        '.icon': { opacity: '100%', transform: 'translateX(0)' },
      }}
      _visited={{ color: 'tertiary.800' }}
      target={isExternal ? '_blank' : '_self'}
    >
      <Flex justifyContent='space-between'>
        <Box>
          <Text
            className='label'
            transition='all .3s ease'
            _groupHover={{ color: 'tertiary.700' }}
            fontWeight={600}
          >
            {label}
          </Text>
          <br />
          <Text fontSize='sm' color='text.body'>
            {subLabel}
          </Text>
        </Box>
        <Flex
          className='icon'
          ml='10px'
          transition='all .3s ease'
          transform='translateX(-10px)'
          opacity={1}
          justify='flex-end'
          align='center'
        >
          <Icon
            sx={{
              '> *': { color: 'tertiary.700' },
            }}
            w={3}
            h={3}
            as={FaChevronRight}
          />
        </Flex>
      </Flex>
    </Link>
  );
};

export const Navigation: React.FC<NavigationProps> = ({ bg, navigation }) => {
  const { isOpen, onToggle } = useDisclosure();
  const screenSize = useBreakpointValue({
    base: 'mobile-small',
    sm: 'mobile',
    lg: 'desktop',
  });
  const navItems = navigation?.routes;
  return (
    <Box as='nav' aria-label='Main navigation' w='100%'>
      <Flex
        bg={bg || 'tertiary.700'}
        color='white'
        minH='60px'
        h={['105px', '77px', '89px']}
        px={6}
        borderBottom={1}
        borderStyle='solid'
        borderColor='gray.200'
        align='center'
      >
        <Flex flex={{ base: 1, md: 'auto' }} alignItems='center'>
          <Flex flex={{ base: 1 }} justify='start'>
            {navigation && navigation.href ? (
              <Link
                display='flex'
                alignItems='center'
                href={navigation.href}
                variant='unstyled'
                py={6}
              >
                <Image
                  w='auto'
                  h={
                    screenSize === 'mobile'
                      ? '28px'
                      : screenSize === 'mobile-small'
                      ? '56px'
                      : '40px'
                  }
                  minH={
                    screenSize === 'mobile'
                      ? '28px'
                      : screenSize === 'mobile-small'
                      ? '56px'
                      : '40px'
                  }
                  src={
                    screenSize === 'mobile'
                      ? MobileLogo
                      : screenSize === 'mobile-small'
                      ? VerticalMobileLogo
                      : DesktopLogo
                  }
                  alt={'NIAID Data Ecosystem logo'}
                />
              </Link>
            ) : (
              <Image
                w='auto'
                h={
                  screenSize === 'mobile'
                    ? '28px'
                    : screenSize === 'mobile-small'
                    ? '56px'
                    : '40px'
                }
                minH={
                  screenSize === 'mobile'
                    ? '28px'
                    : screenSize === 'mobile-small'
                    ? '56px'
                    : '40px'
                }
                src={
                  screenSize === 'mobile'
                    ? MobileLogo
                    : screenSize === 'mobile-small'
                    ? VerticalMobileLogo
                    : DesktopLogo
                }
                alt={'NIAID Data Ecosystem logo'}
              />
            )}
            <Flex
              display={{ base: 'none', md: 'flex' }}
              ml={{ base: 6, lg: 10 }}
              flex={1}
              justifyContent='flex-end'
            >
              <Stack direction={'row'} spacing={{ base: 2, lg: 4 }} py={2}>
                {navItems &&
                  navItems.map(navItem => (
                    <DesktopNavItem key={navItem.label} {...navItem} />
                  ))}
              </Stack>
            </Flex>
          </Flex>
          {navItems && (
            <IconButton
              onClick={onToggle}
              colorScheme='tertiary'
              color='#fff'
              display={{ base: 'flex', md: 'none' }}
              _hover={{ bg: 'whiteAlpha.500' }}
              icon={
                isOpen ? (
                  <Icon as={IoClose} w={5} h={5} />
                ) : (
                  <Icon as={IoMenu} w={5} h={5} />
                )
              }
              variant='ghost'
              aria-label='Toggle Navigation'
            />
          )}
        </Flex>
      </Flex>

      {/* Nav in mobile mode */}

      <Box borderRadius='semi' boxShadow='base' overflow='hidden'>
        <Collapse in={isOpen} animateOpacity>
          <Stack bg='white' p={2} display={{ md: 'none' }} alignItems='end'>
            {navItems &&
              navItems.map(navItem => (
                <MobileNavItem key={navItem.label} {...navItem} />
              ))}
          </Stack>
        </Collapse>
      </Box>
    </Box>
  );
};
