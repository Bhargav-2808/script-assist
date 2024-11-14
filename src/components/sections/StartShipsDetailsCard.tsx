import { Card, Text, Stack, Badge, Title, Group, Anchor } from "@mantine/core";
import {
  IconGauge,
  IconUsers,
  IconCurrencyDollar,
  IconBuildingFactory,
  IconDimensions,
  IconSpeedboat,
  IconRocket,
  IconCalendar,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { Starship } from "../types";

const StarShipsDetailsCard = ({ data }: { data: Starship }) => {
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
          {data?.starship_class}
        </Badge>
      </Group>

      <Stack spacing="sm">
        <Text>
          <IconBuildingFactory size={20} style={{ marginRight: "8px" }} />
          <strong>Manufacturer:</strong> {data?.manufacturer}
        </Text>
        <Text>
          <IconGauge size={20} style={{ marginRight: "8px" }} />
          <strong>Model:</strong> {data?.model}
        </Text>
        <Text>
          <IconCurrencyDollar size={20} style={{ marginRight: "8px" }} />
          <strong>Cost in Credits:</strong> {data?.cost_in_credits}
        </Text>
        <Text>
          <IconDimensions size={20} style={{ marginRight: "8px" }} />
          <strong>Length:</strong> {data?.length} meters
        </Text>
        <Text>
          <IconSpeedboat size={20} style={{ marginRight: "8px" }} />
          <strong>Max Speed:</strong> {data?.max_atmosphering_speed} km/h
        </Text>
        <Text>
          <IconUsers size={20} style={{ marginRight: "8px" }} />
          <strong>Crew:</strong> {data?.crew}
        </Text>
        <Text>
          <IconUsers size={20} style={{ marginRight: "8px" }} />
          <strong>Passengers:</strong> {data?.passengers}
        </Text>
        <Text>
          <IconGauge size={20} style={{ marginRight: "8px" }} />
          <strong>Cargo Capacity:</strong> {data?.cargo_capacity} kg
        </Text>
        <Text>
          <IconRocket size={20} style={{ marginRight: "8px" }} />
          <strong>Hyperdrive Rating:</strong> {data?.hyperdrive_rating}
        </Text>
        <Text>
          <IconRocket size={20} style={{ marginRight: "8px" }} />
          <strong>MGLT:</strong> {data?.MGLT} MGLT
        </Text>
        <Text>
          <IconCalendar size={20} style={{ marginRight: "8px" }} />
          <strong>Consumables:</strong> {data?.consumables}
        </Text>
      </Stack>

      {data?.pilots && data.pilots.length > 0 && (
        <Group mt="lg" spacing="xs">
          <Badge size="md" color="purple">
            Pilots: {data.pilots.length}
          </Badge>
          {data.pilots.map((url: string, index: number) => {
            const pilotId = extractIdFromUrl(url);
            return (
              <Anchor
                key={index}
                component={Link}
                to={`/people/${pilotId}`}
                color="purple"
                size="sm"
                style={{ textDecoration: "none", marginLeft: "10px" }}
              >
                {`Pilot ${index + 1}`}
              </Anchor>
            );
          })}
        </Group>
      )}

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

export default StarShipsDetailsCard;
