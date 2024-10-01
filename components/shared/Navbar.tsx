import {
  Box,
  Burger,
  Button,
  ButtonStylesParams,
  Container,
  Drawer,
  Group,
  Header,
  Stack,
  useMantineColorScheme,
} from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import LogoDarkHorizontal from '../../assets/logo-black-horizontal.svg';
import LogoWhiteHorizontal from '../../assets/logo-white-horizontal.svg';
import ThemeToggler from '../ThemeToggler';
import Localize from './Localize';

const links: { id: number; link: string; label: string }[] = [
  {
    id: 1,
    link: '/',
    label: 'Home',
  },
  { id: 2, link: '/about', label: 'About Us' },
  { id: 3, link: '/campaign', label: 'Campaign' },
  { id: 4, link: '/news', label: 'News' },
  // { id: 5, link: '/volunteers', label: 'Volunteers' },
  // { id: 6, link: '/donate', label: 'Donate' },
  { id: 6, link: '/doner', label: 'Doner' },
];

const Navbar = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  const [opened, { toggle, close }] = useDisclosure(false);
  const isMobile = useMediaQuery('(max-width: 880px)');

  const [active, setActive] = useState(links[0].link);

  const items = links?.map((link) => (
    <Button
      key={link.id}
      component={Link}
      fw={500}
      fz={12}
      variant={link.link === active ? 'filled' : 'subtle'}
      href={link.link}
      className="border-0 px-3"
      styles={(theme, params: ButtonStylesParams, { variant }) => ({
        root: {
          color: variant === 'subtle' && dark ? theme.white : '',
        },
      })}
      onClick={() => {
        setActive(link.link);
        close();
      }}
    >
      {link.label}
    </Button>
  ));

  return (
    <Header height="auto" p={10} bg={`${dark ? 'dark.7' : 'white'}`}>
      <Container px={20} mx="auto" size="xl">
        <Group position="apart">
          {isMobile && (
            <Box>
              <Drawer size="250px" opened={opened} onClose={close}>
                <div style={{ marginBottom: '14px' }}>
                  <Localize fullWidth />
                </div>
                <Stack>{items}</Stack>
              </Drawer>
              <Burger opened={opened} onClick={toggle} size="sm" />
            </Box>
          )}
          <Image src={dark ? LogoDarkHorizontal : LogoWhiteHorizontal} alt="logo" width={120} />
          <Group position="right">
            {!isMobile && (
              <Group className="gap-2">
                {items}
                <Localize />
              </Group>
            )}
            <ThemeToggler />
          </Group>
        </Group>
      </Container>
    </Header>
  );
};

export default Navbar;
