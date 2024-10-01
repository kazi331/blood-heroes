import {
  ActionIcon,
  BackgroundImage,
  Box,
  Button,
  Card,
  Container,
  Flex,
  Text,
  Title,
  useMantineColorScheme,
} from '@mantine/core';
import { IconEdit, IconPlus, IconSettings } from '@tabler/icons-react';
import profileImage from '../../assets/images/user-profile.jpg';

export default function Profile() {
  const theme = useMantineColorScheme();
  const dark = theme.colorScheme === 'dark';
  return (
    <Container size="xs">
      <Card mt="lg" radius="md" shadow="sm" className={`${dark ? 'bg-slate-600' : 'bg-white'}`}>
        <Flex align="center" justify="space-between" w="100%" mb="sm">
          <IconPlus className="bg-cyan-500/90 text-white rounded-full p-1" size="32" />
          <Title
            order={3}
            // sx={({ colorScheme }: MantineTheme) => ({
            //   color: colorScheme === 'dark' ? 'lightgrey' : 'gray',
            // })}
            className={`${dark ? 'text-slate-300' : 'text-slate-500'}`}
          >
            Profile
          </Title>
          <ActionIcon variant="subtle" p="2px" size="xl">
            <IconSettings />
          </ActionIcon>
        </Flex>
        <Card>
          <Card.Section>
            <BackgroundImage src={profileImage.src}>
              <Box p="lg" className="bg-gray-800/50">
                <Title className="text-white">Doner Name </Title>
                <Text>Beginner Doner</Text>
                <Button variant="light" color="dark" mt="lg">
                  <Text mr="xs">Edit</Text> <IconEdit />
                </Button>
              </Box>
            </BackgroundImage>
          </Card.Section>
        </Card>
      </Card>
    </Container>
  );
}
