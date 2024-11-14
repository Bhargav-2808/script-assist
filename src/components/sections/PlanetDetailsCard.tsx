import { Card, Text, Stack, Badge, Title, Group, Anchor } from "@mantine/core";
import { IconWorld, IconUsers, IconFlame, IconRulerMeasure, IconCircleDotted, IconStar } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { Planet } from "../types";

const PlanetDetailsCard = ({ data }: { data: Planet }) => {
  const extractIdFromUrl = (url: string) => url.split("/").filter(Boolean).pop();

  return (
    <Card
      shadow="lg"
      padding="xl"
      radius="md"
      style={{
        backgroundColor: "#F8FAFC",
        color: "#111827",
      }}
    >
      <Group position="apart" mb="md">
        <Title order={2}>{data?.name}</Title>
        <Badge color="teal" size="lg">
          Population: {data?.population}
        </Badge>
      </Group>

      <Stack spacing="sm">
        <Text>
          <IconWorld size={20} style={{ marginRight: "8px" }} />
          <strong>Climate:</strong> {data?.climate}
        </Text>
        <Text>
          <IconFlame size={20} style={{ marginRight: "8px" }} />
          <strong>Terrain:</strong> {data?.terrain}
        </Text>
        <Text>
          <IconCircleDotted size={20} style={{ marginRight: "8px" }} />
          <strong>Gravity:</strong> {data?.gravity}
        </Text>
        <Text>
          <IconRulerMeasure size={20} style={{ marginRight: "8px" }} />
          <strong>Diameter:</strong> {data?.diameter} km
        </Text>
        <Text>
          <IconCircleDotted size={20} style={{ marginRight: "8px" }} />
          <strong>Orbital Period:</strong> {data?.orbital_period} days
        </Text>
        <Text>
          <IconCircleDotted size={20} style={{ marginRight: "8px" }} />
          <strong>Rotation Period:</strong> {data?.rotation_period} hours
        </Text>
        <Text>
          <IconStar size={20} style={{ marginRight: "8px" }} />
          <strong>Surface Water:</strong> {data?.surface_water}%
        </Text>
      </Stack>

      <Group mt="lg" spacing="xs">
        <Badge size="md" color="blue">
          Residents: {data?.residents.length}
        </Badge>
        {data?.residents?.map((url: string, index: number) => {
          const residentId = extractIdFromUrl(url);
          return (
            <Anchor
              key={index}
              component={Link}
              to={`/people/${residentId}`}
              color="blue"
              size="sm"
              style={{ textDecoration: "none", marginLeft: "10px" }}
            >
              {`Resident ${index + 1}`}
            </Anchor>
          );
        })}
      </Group>

      <Group mt="lg" spacing="xs">
        <Badge size="md" color="orange">
          Films: {data?.films.length}
        </Badge>
        {data?.films?.map((url: string, index: number) => {
          const filmId = extractIdFromUrl(url);
          return (
            <Anchor
              key={index}
              component={Link}
              to={`/films/${filmId}`}
              color="orange"
              size="sm"
              style={{ textDecoration: "none", marginLeft: "10px" }}
            >
              {`Film ${index + 1}`}
            </Anchor>
          );
        })}
      </Group>
    </Card>
  );
};

export default PlanetDetailsCard;
