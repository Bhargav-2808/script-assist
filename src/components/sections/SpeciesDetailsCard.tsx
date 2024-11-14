import { Card, Text, Stack, Badge, Title, Group, Anchor } from "@mantine/core";
import { IconUsers, IconLanguage, IconRulerMeasure, IconHeartbeat, IconPalette, IconPlanet } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { Species } from "../types";

const SpeciesDetailsCard = ({ data }: { data: Species }) => {
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
          Classification: {data?.classification}
        </Badge>
      </Group>

      <Stack spacing="sm">
        <Text>
          <IconUsers size={20} style={{ marginRight: "8px" }} />
          <strong>Designation:</strong> {data?.designation}
        </Text>
        <Text>
          <IconRulerMeasure size={20} style={{ marginRight: "8px" }} />
          <strong>Average Height:</strong> {data?.average_height} meters
        </Text>
        <Text>
          <IconHeartbeat size={20} style={{ marginRight: "8px" }} />
          <strong>Average Lifespan:</strong> {data?.average_lifespan} years
        </Text>
        <Text>
          <IconPalette size={20} style={{ marginRight: "8px" }} />
          <strong>Skin Colors:</strong> {data?.skin_colors}
        </Text>
        <Text>
          <IconPalette size={20} style={{ marginRight: "8px" }} />
          <strong>Hair Colors:</strong> {data?.hair_colors}
        </Text>
        <Text>
          <IconPalette size={20} style={{ marginRight: "8px" }} />
          <strong>Eye Colors:</strong> {data?.eye_colors}
        </Text>
        <Text>
          <IconLanguage size={20} style={{ marginRight: "8px" }} />
          <strong>Language:</strong> {data?.language}
        </Text>
      </Stack>

      {data?.homeworld && (
        <Group mt="lg" spacing="xs">
          <Badge size="md" color="orange">
            Homeworld
          </Badge>
          <Anchor
            component={Link}
            to={`/planets/${extractIdFromUrl(data.homeworld)}`}
            color="orange"
            size="sm"
            style={{ textDecoration: "none", marginLeft: "10px" }}
          >
            {`Planet ${extractIdFromUrl(data.homeworld)}`}
          </Anchor>
        </Group>
      )}

      <Group mt="lg" spacing="xs">
        <Badge size="md" color="blue">
          People: {data?.people.length}
        </Badge>
        {data?.people?.map((url: string, index: number) => {
          const personId = extractIdFromUrl(url);
          return (
            <Anchor
              key={index}
              component={Link}
              to={`/people/${personId}`}
              color="blue"
              size="sm"
              style={{ textDecoration: "none", marginLeft: "10px" }}
            >
              {`Person ${index + 1}`}
            </Anchor>
          );
        })}
      </Group>

      <Group mt="lg" spacing="xs">
        <Badge size="md" color="green">
          Films: {data?.films.length}
        </Badge>
        {data?.films?.map((url: string, index: number) => {
          const filmId = extractIdFromUrl(url);
          return (
            <Anchor
              key={index}
              component={Link}
              to={`/films/${filmId}`}
              color="green"
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

export default SpeciesDetailsCard;
