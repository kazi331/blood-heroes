import { MantineThemeOverride } from '@mantine/core';
import { Montserrat, Raleway } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });
const raleway = Raleway({ subsets: ['latin'] });

const themeObj: MantineThemeOverride = {
  cursorType: 'pointer',
  focusRing: 'never',
  black: '#212d3b',
  white: '#fef7ec',
  breakpoints: {
    xs: '576px',
    sm: '768px',
    md: '992px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1200px',
  },
  colors: {
    primary: [
      '#FFDCDC',
      '#FFB7B7',
      '#FF9595',
      '#FF7676',
      '#FF5959',
      '#FF3F3F',
      '#FE2E2E',
      '#FF0D0D',
      '#FF0000',
      '#F30000',
    ],
    dark: [
      '#DEDEDE',
      '#AAABAC',
      '#818386',
      '#616569',
      '#484D53',
      '#333B44',
      '#212D3B',
      '#1C2025',
      '#151618',
      '#0F1010',
    ],
  },
  primaryColor: 'primary',
  primaryShade: 6,
  defaultGradient: {
    deg: 45,
    from: 'primary.4',
    to: 'primary.8',
  },
  defaultRadius: 'sm',
  fontFamily: montserrat.style.fontFamily,
  activeStyles: {
    transform: 'scale(0.95)',
  },
  headings: {
    fontFamily: raleway.style.fontFamily,
  },
  components: {
    ActionIcon: {
      defaultProps: () => ({
        variant: 'subtle',
      }),
    },
    Anchor: {
      styles: (theme) => ({
        root: {
          fontWeight: 600,
          color: theme.colors.primary[6],
        },
      }),
    },
    CloseButton: {
      defaultProps: () => ({
        color: 'primary',
        variant: 'transparent',
      }),
      styles: (theme) => ({
        root: {
          color: theme.colors.primary[6],
        },
      }),
    },
    Header: {
      styles: (theme) => ({
        root: {
          backgroundColor: theme.colorScheme === 'dark' ? theme.black : theme.white,
        },
      }),
    },
    Title: {
      styles: (theme) => ({
        root: {
          color: theme.colors.primary[4],
        },
      }),
    },
  },
  loader: 'dots',
  globalStyles: (theme) => ({
    body: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.black : theme.white,
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  }),
};

export default themeObj;
