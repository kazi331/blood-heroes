import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons-react';

export default function ThemeToggler() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <ActionIcon
      variant="default"
      p={7}
      size="lg"
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {dark ? <IconSun /> : <IconMoonStars />}
    </ActionIcon>
  );
}
