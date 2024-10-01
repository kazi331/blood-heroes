import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import { getCookie, setCookie } from 'cookies-next';
import { appWithTranslation } from 'next-i18next';
import NextApp, { AppContext, AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import Navbar from '../components/shared/Navbar';
import themeObj from '../config/mantineThemeObj';
import '../styles/globals.css';
import '../styles/tailwind.css';

function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const preferredColorScheme = useColorScheme();
  const defaultColorScheme =
    (getCookie('mantine-color-scheme') as ColorScheme) || preferredColorScheme;

  const [colorScheme, setColorScheme] = useState<ColorScheme>(preferredColorScheme);

  useEffect(() => {
    setColorScheme(defaultColorScheme);
  }, [defaultColorScheme]);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    // when color scheme is updated save it to cookie
    setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        theme={{
          ...themeObj,
          colorScheme,
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Navbar />
        <Component {...pageProps} />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export const getServerSideProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
    colorScheme: getCookie('mantine-color-scheme', appContext.ctx) || 'light',
  };
};

export default appWithTranslation(App);
