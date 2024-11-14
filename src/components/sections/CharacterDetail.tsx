import { Card, Text, Stack, Badge, Title, Group, Anchor } from "@mantine/core";
import { IconStar } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { Person } from "../types";

const CharacterDetail = ({ data }: { data: Person }) => {
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
      {/* Header with Title */}
      <Group position="apart" mb="md">
        <Title order={2}>{data?.name}</Title>
        <Badge color="teal" size="lg">
          {data?.gender}
        </Badge>
      </Group>

      {/* Character Details */}
      <Stack spacing="sm">
        <Text>
          <IconStar size={20} style={{ marginRight: "8px" }} />
          <strong>Height:</strong> {data?.height} cm
        </Text>
        <Text>
          <IconStar size={20} style={{ marginRight: "8px" }} />
          <strong>Mass:</strong> {data?.mass} kg
        </Text>
        <Text>
          <IconStar size={20} style={{ marginRight: "8px" }} />
          <strong>Hair Color:</strong> {data?.hair_color}
        </Text>
        <Text>
          <IconStar size={20} style={{ marginRight: "8px" }} />
          <strong>Eye Color:</strong> {data?.eye_color}
        </Text>
        <Text>
          <IconStar size={20} style={{ marginRight: "8px" }} />
          <strong>Skin Color:</strong> {data?.skin_color}
        </Text>
        <Text>
          <IconStar size={20} style={{ marginRight: "8px" }} />
          <strong>Birth Year:</strong> {data?.birth_year}
        </Text>
      </Stack>
      <Group mt="lg" spacing="xs">
        <Badge size="md" color="blue">
          Films: {data?.films.length}
        </Badge>
        {data?.films?.map((filmUrl: string, index: number) => {
          const filmId = filmUrl.split("/").filter(Boolean).pop(); // Extract ID from URL
          return (
            <Anchor
              key={index}
              component={Link}
              to={`/films/${filmId}`} // Assuming you have a route to handle film details
              color="blue"
              size="sm"
              style={{ textDecoration: "none", marginLeft: "10px" }}
            >
              {`Film ${index + 1}`}
            </Anchor>
          );
        })}
      </Group>
      <Group mt="lg" spacing="xs">
        <Badge size="md" color="orange">
          Starships: {data?.starships.length}
        </Badge>
        {data?.starships?.map((filmUrl: string, index: number) => {
          const starshipId = filmUrl.split("/").filter(Boolean).pop(); // Extract ID from URL
          return (
            <Anchor
              key={index}
              component={Link}
              to={`/starships/${starshipId}`} // Assuming you have a route to handle film details
              color="orange"
              size="sm"
              style={{ textDecoration: "none", marginLeft: "10px" }}
            >
              {`Starships ${index + 1}`}
            </Anchor>
          );
        })}
      </Group>
      <Group mt="lg" spacing="xs">
        <Badge size="md" color="green">
          Vehicles: {data?.vehicles.length}
        </Badge>
        {data?.vehicles?.map((filmUrl: string, index: number) => {
          const vehicleId = filmUrl.split("/").filter(Boolean).pop(); // Extract ID from URL
          return (
            <Anchor
              key={index}
              component={Link}
              to={`/vehicles/${vehicleId}`} // Assuming you have a route to handle film details
              color="green"
              size="sm"
              style={{ textDecoration: "none", marginLeft: "10px" }}
            >
              {`Vehicle ${index + 1}`}
            </Anchor>
          );
        })}
      </Group>
    </Card>
  );
};

export default CharacterDetail;
