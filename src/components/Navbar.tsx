import { Button, Container, Group } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth.store";
import logo from "../assets/logo.png";
import { theme } from "../theme";

const Navbar = () => {
  const { logout, isAuthenticated } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div style={{ width: "100%", background: theme.colors.primary?.[4] }}>
      <Container size="xl" style={{}}>
        <Group position="apart" p="md">
          <img
            alt="logo"
            src={logo}
            style={{ width: "130px", height: "70px" }}
          />
          {isAuthenticated && (
            <Button variant="gradient" color="red" onClick={handleLogout}>
              Logout
            </Button>
          )}
        </Group>
      </Container>
    </div>
  );
};

export default Navbar;
