import { Alert, Text, Group } from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons-react";

const LoginCredentialsAlert = () => {
  return (
    <Alert
      icon={<IconAlertCircle size="1.5rem" />}
      title="Login Credentials"
      radius="lg"
      variant="outline"
      color="indigo"
      style={{
        marginTop: "1rem",
        backgroundColor: "#eef2ff",
        color: "#1e3a8a",
        borderLeft: "5px solid #4f46e5",
      }}
    >
      <Group spacing="xs" mt="sm">
        <Text weight={600} color="#1e3a8a">
          Email: admin@gmail.com
        </Text>
      </Group>
      <Group spacing="xs" mt="sm">
        <Text weight={600} color="#1e3a8a">
          Password: password
        </Text>
      </Group>
    </Alert>
  );
};

export default LoginCredentialsAlert;
