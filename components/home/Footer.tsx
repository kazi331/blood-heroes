import {
  Center,
  Container,
  Grid,
  NavLink,
  Stack,
  Title,
  useMantineColorScheme,
} from '@mantine/core';
import Image from 'next/image';
import logoDark from '../../assets/logo-black-horizontal.svg';
import logoLight from '../../assets/logo-white-horizontal.svg';
import { FooterItem } from '../../types/types';

const { Col } = Grid;

const footerItems: FooterItem[] = [
  {
    heading: 'Blood Heroes',
    links: [
      { label: 'Index Us', href: '#' },
      { label: 'Donate Blood', href: '#' },
      { label: 'Eligibility Criteria', href: '#' },
      { label: 'Donation Process', href: '#' },
    ],
  },
  {
    heading: 'Contact Us',
    links: [
      { label: 'Email', href: '#' },
      { label: 'Phone', href: '#' },
      { label: 'Address', href: '#' },
      { label: 'FAQs', href: '#' },
    ],
  },
  {
    heading: 'Privacy Policy',
    links: [
      { label: 'Terms of Service', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'Disclaimer', href: '#' },
    ],
  },
];

// footer items
const items = footerItems.map((item) => {
  // links per section
  const links = item.links.map((link) => (
    <NavLink
      key={link.label}
      p="4px 0px"
      px="sm"
      style={{ borderRadius: '3px' }}
      component="a"
      href={link.href}
      label={link.label}
      className="hover:text-red-500"
    />
  ));
  return (
    <Col key={item.heading} xs={4} md={4} xl={4}>
      <Title px="sm" mb="lg" style={{ textTransform: 'uppercase' }} order={5}>
        {item.heading}
      </Title>
      {/* all links are mapped here  */}
      <Stack spacing={0}>{links}</Stack>
    </Col>
  );
});

const Footer = () => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <footer style={{ backgroundColor: colorScheme === 'dark' ? '#1f2937' : 'white' }}>
      <Container size="xl" py="xl" mt="40px">
        {/* <p>© 2021 Mantine </p> */}
        <Grid p="lg" gutter="md" gutterXs="xs" gutterXl="xl">
          <Col sm={8} md={5} xl={5}>
            <Image
              placeholder="blur"
              blurDataURL={logoDark.src}
              alt="Blood Heroes"
              width={248}
              height={80}
              src={colorScheme === 'dark' ? logoDark.src : logoLight.src}
            />
            <p>
              Blood Heroes is a website dedicated to promoting and facilitating blood donation. Join
              our community of heroes and help save lives by donating blood today.
            </p>
          </Col>
          <Col md={7} xl={7}>
            <Grid>{items}</Grid>
          </Col>
        </Grid>
        <Center style={{ borderTop: '1px solid rgba(0,0,0, 0.2)' }} pt="lg">
          © {new Date().getFullYear()} Blood Heroes. All rights reserved.
        </Center>
      </Container>
    </footer>
  );
};

export default Footer;
