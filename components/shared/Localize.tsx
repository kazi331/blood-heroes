import { SegmentedControl } from '@mantine/core';
import { useRouter } from 'next/router';

export default function Localize({ fullWidth }: { fullWidth?: boolean }) {
  const { pathname, asPath, query, locale, push } = useRouter();
  const changeLocale = (lang: string) => {
    push({ pathname, query }, asPath, { locale: lang });
  };

  return (
    <>
      <SegmentedControl
        fullWidth={fullWidth}
        size="sm"
        value={locale}
        onChange={(selected) => {
          changeLocale(selected);
        }}
        transitionDuration={300}
        data={[
          { label: 'বাংলা', value: 'bn' },
          { label: 'English', value: 'en' },
        ]}
      />
    </>
  );
}
