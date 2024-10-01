// import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Faq from '../components/home/Faq';
import Footer from '../components/home/Footer';

export default function Home() {
  return (
    <>
      <Faq />
      <Footer />
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'faq', 'navbar', 'footer'])),
    },
  };
}
