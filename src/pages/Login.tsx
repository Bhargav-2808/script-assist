import {
  Button,
  TextInput,
  Card,
  Title,
  Stack,
  Notification,
} from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth.store";
import PageContainer from "../components/PageContainer";
import LoginCredentialsAlert from "../components/LoginCredentialsAlert";
import { theme } from "../theme";

// Types for form input state
interface InputState {
  email: string;
  password: string;
  isEmailError: boolean;
  isPasswordError: boolean;
}

const Login = () => {
  const { login, isAuthenticated } = useAuthStore();
  const navigate = useNavigate();

  const [input, setInput] = useState<InputState>({
    email: "",
    password: "",
    isEmailError: false,
    isPasswordError: false,
  });
  
  const [invalidCredential, setInvalidCredential] = useState<boolean>(false);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
      isEmailError: name === "email" ? false : prevInput.isEmailError,
      isPasswordError: name === "password" ? false : prevInput.isPasswordError,
    }));
  };

  // Handle login logic with validation
  const handleLogin = () => {
    setInvalidCredential(false);
    const { email, password } = input;
    let isValid = true;

    // Basic validation
    if (!email) {
      isValid = false;
      setInput((prevInput) => ({ ...prevInput, isEmailError: true }));
    }
    if (!password) {
      isValid = false;
      setInput((prevInput) => ({ ...prevInput, isPasswordError: true }));
    }

    if (isValid) {
      if (email === "admin@gmail.com" && password === "password") {
        login("mock-auth-token");
        navigate("/");
      } else {
        setInvalidCredential(true);
      }
    }
  };

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <PageContainer
      size={"xs"}
      style={{
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Card
        shadow="lg"
        radius="md"
        padding="xl"
        style={{ background: theme.colors.primary?.[7], color: "white" }}
      >
        <Stack spacing="md">
          <Title align="center" order={2}>
            Sign in
          </Title>
          {invalidCredential && (
            <Notification
              icon={<IconX size="1.1rem" />}
              color="red"
              onClose={() => setInvalidCredential(false)}
            >
              Invalid email or password. Please try again.
            </Notification>
          )}
          <TextInput
            label="Email"
            name="email"
            placeholder="your@email.com"
            value={input.email}
            onChange={handleChangeInput}
            required
            error={input.isEmailError && "Email is required"}
          />
          <TextInput
            label="Password"
            name="password"
            placeholder="Enter your password"
            value={input.password}
            onChange={handleChangeInput}
            required
            type="password"
            error={input.isPasswordError && "Password is required"}
            styles={{ label: { color: "white" } }}
          />

          <Button fullWidth mt="lg" mb="lg" onClick={handleLogin} variant="gradient">
            Sign in
          </Button>
        </Stack>
      </Card>
      <LoginCredentialsAlert />
    </PageContainer>
  );
};

export default Login;
