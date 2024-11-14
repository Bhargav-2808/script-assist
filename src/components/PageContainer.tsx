import { Container, ContainerProps } from "@mantine/core";
import { ReactNode, CSSProperties } from "react";

interface PageContainerProps {
  children: ReactNode;
  size?: ContainerProps["size"];
  style?: CSSProperties;
}

const PageContainer = ({
  children,
  size = "md",
  style = {},
}: PageContainerProps) => {
  return (
    <Container size={size} style={{ ...style, marginTop:'2rem' }}>
      {children}
    </Container>
  );
};

export default PageContainer;
