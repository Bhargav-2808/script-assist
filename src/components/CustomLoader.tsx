import { Container, Loader } from "@mantine/core";

interface CustomLoaderProps {
  style?: React.CSSProperties;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

const customStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  height: "70vh",
  alignItems: "center",
};

const CustomLoader = ({ style = {}, size = "lg" }: CustomLoaderProps) => {
  return (
    <Container
      style={{
        ...customStyle,
        ...style,
      }}
      size={size}
    >
      <Loader size={size} />
    </Container>
  );
};

export default CustomLoader;
