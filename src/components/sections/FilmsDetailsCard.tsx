import { Card, Text, Stack, Badge, Title, Group, Anchor } from "@mantine/core";
import { IconStar } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { Film } from "../types";


const FilmDetailsCard = ({ data }: { data: Film }) => {
  const extractIdFromUrl = (url: string) =>
    url.split("/").filter(Boolean).pop();

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
        <Title order={2}>{data?.title}</Title>
        <Badge color="teal" size="lg">
          Episode {data?.episode_id}
        </Badge>
      </Group>

      <Stack spacing="sm">
        <Text>
          <IconStar size={20} style={{ marginRight: "8px" }} />
          <strong>Director:</strong> {data?.director}
        </Text>
        <Text>
          <IconStar size={20} style={{ marginRight: "8px" }} />
          <strong>Producer:</strong> {data?.producer}
        </Text>
        <Text>
          <IconStar size={20} style={{ marginRight: "8px" }} />
          <strong>Release Date:</strong>{" "}
          {new Date(data?.release_date).toDateString()}
        </Text>
        <Text>
          <IconStar size={20} style={{ marginRight: "8px" }} />
          <strong>Opening Crawl:</strong> {data?.opening_crawl}
        </Text>
      </Stack>

      <Group mt="lg" spacing="xs">
        <Badge size="md" color="blue">
          Characters: {data?.characters.length}
        </Badge>
        {data?.characters?.map((url: string, index: number) => {
          const characterId = extractIdFromUrl(url);
          return (
            <Anchor
              key={index}
              component={Link}
              to={`/people/${characterId}`}
              color="blue"
              size="sm"
              style={{ textDecoration: "none", marginLeft: "10px" }}
            >
              {`Character ${index + 1}`}
            </Anchor>
          );
        })}
      </Group>

      <Group mt="lg" spacing="xs">
        <Badge size="md" color="orange">
          Planets: {data?.planets.length}
        </Badge>
        {data?.planets?.map((url: string, index: number) => {
          const planetId = extractIdFromUrl(url);
          return (
            <Anchor
              key={index}
              component={Link}
              to={`/planets/${planetId}`}
              color="orange"
              size="sm"
              style={{ textDecoration: "none", marginLeft: "10px" }}
            >
              {`Planet ${index + 1}`}
            </Anchor>
          );
        })}
      </Group>

      <Group mt="lg" spacing="xs">
        <Badge size="md" color="green">
          Starships: {data?.starships.length}
        </Badge>
        {data?.starships?.map((url: string, index: number) => {
          const starshipId = extractIdFromUrl(url);
          return (
            <Anchor
              key={index}
              component={Link}
              to={`/starships/${starshipId}`}
              color="green"
              size="sm"
              style={{ textDecoration: "none", marginLeft: "10px" }}
            >
              {`Starship ${index + 1}`}
            </Anchor>
          );
        })}
      </Group>

      <Group mt="lg" spacing="xs">
        <Badge size="md" color="yellow">
          Vehicles: {data?.vehicles.length}
        </Badge>
        {data?.vehicles?.map((url: string, index: number) => {
          const vehicleId = extractIdFromUrl(url);
          return (
            <Anchor
              key={index}
              component={Link}
              to={`/vehicles/${vehicleId}`}
              color="yellow"
              size="sm"
              style={{ textDecoration: "none", marginLeft: "10px" }}
            >
              {`Vehicle ${index + 1}`}
            </Anchor>
          );
        })}
      </Group>

      <Group mt="lg" spacing="xs">
        <Badge size="md" color="red">
          Species: {data?.species.length}
        </Badge>
        {data?.species?.map((url: string, index: number) => {
          const speciesId = extractIdFromUrl(url);
          return (
            <Anchor
              key={index}
              component={Link}
              to={`/species/${speciesId}`}
              color="red"
              size="sm"
              style={{ textDecoration: "none", marginLeft: "10px" }}
            >
              {`Species ${index + 1}`}
            </Anchor>
          );
        })}
      </Group>
    </Card>
  );
};

export default FilmDetailsCard;
