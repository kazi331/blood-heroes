import { Accordion, Container, MantineTheme, Text, Title } from '@mantine/core';
import { useTranslation } from 'next-i18next';

import { IconPlus } from '@tabler/icons-react';
import type { FAQ } from '../../types/types';
// destructuring Accordion components
const { Item, Control, Panel } = Accordion;

export default function Faq() {
  const { t } = useTranslation('faq');
  const styles = (theme: MantineTheme) => ({
    item: {
      '[data-active]': {
        backgroundColor: '#ea5975',
        color: theme.white,
        // transition: 'all 0.3s ease-in-out',
        transition: 'transform 150ms ease',
      },
    },
    control: {
      color: '#ea5975',
      '&:hover': {
        backgroundColor: '#ea5975',
        color: theme.white,
      },
    },
    panel: { backgroundColor: theme.colorScheme === 'dark' ? '#3b4252' : '' },
  });

  const faqs: FAQ[] = [
    {
      id: 1,
      question: 'Is it safe to give blood?',
      answer:
        'Yes. Donating blood is safe. The supplies used to collect blood are sterile and only used once.',
    },
    {
      id: 2,
      question: 'Are there age limits for blood donors?',
      answer:
        'Each state sets the minimum blood donor age. You must be at least 16 or 17-years-old depending on your state. Some blood centers may have an upper age limit. Please call and check with your local blood center for more information.',
    },
    {
      id: 3,
      question: "I'm taking medications. Can I still donate blood?",
      answer:
        "Many medications are acceptable. Consult your physician to be sure you're healthy enough to donate and ask your community blood center medical staff if you have questions about your eligibility. Do not assume that you are ineligible without inquiring first.",
    },
    {
      id: 4,
      question: 'How much blood do I have in my body?',
      answer: 'Women have about 10 pints, and men about 12 pints of blood in their bodies.',
    },
    {
      id: 5,
      question: 'How long must I wait between blood donations?',
      answer:
        'You must wait at least eight weeks (56 days) between donations of whole blood. Platelet apheresis donors may give every seven days up to 24 times per year. Regulations are different for those giving blood for themselves (autologous donors).',
    },
  ];

  const items = faqs.map((faq) => (
    <Item key={faq.id} value={faq.id.toString()}>
      <Control>{faq.question}</Control>
      <Panel>
        <Text p="lg">{faq.answer}</Text>
      </Panel>
    </Item>
  ));

  return (
    <Container px={20} mx="auto" size="xl">
      <Title order={2} ta="center" pt="lg">
        {t('title')}
        {/* Frequently Asked Questions */}
      </Title>
      <Text align="center" pb="lg" pt="sm">
        {t('sub-title')}
        {/* Answers to Common Questions Index Donating Blood */}
      </Text>
      <Accordion
        chevron={<IconPlus size="1rem" />}
        variant="contained"
        transitionDuration={500}
        styles={styles}
        defaultValue="2"
      >
        {items}
      </Accordion>
    </Container>
  );
}
