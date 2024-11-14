import { useQuery } from "@tanstack/react-query";
import { fetchPeople } from "../services/swapi";
import {
  TextInput,
  Title,
  Pagination,
  Group,
  Select,
  ActionIcon,
} from "@mantine/core";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import CustomLoader from "../components/CustomLoader";
import Table from "../components/Table";
import PageContainer from "../components/PageContainer";
import { theme } from "../theme";
import { Person } from "../types";

interface ApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Person[];
}

const Landing = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");
  const [genderFilter, setGenderFilter] = useState<string | null>(null);
  const [heightFilter, setHeightFilter] = useState<string | null>(null);
  const [birthYearFilter, setBirthYearFilter] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>("name");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [search]);

  const { data, isLoading, isError } = useQuery<ApiResponse>(
    [
      "people",
      currentPage,
      debouncedSearch,
      genderFilter,
      heightFilter,
      birthYearFilter,
    ],
    () => fetchPeople(currentPage, debouncedSearch),
    { keepPreviousData: true }
  );

  if (isLoading) return <CustomLoader />;
  if (isError) return <div>Error loading data</div>;

  const filteredPeople = data?.results.filter((person: Person) => {
    const matchesSearch = person.name
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase());
    let matchesGender = genderFilter ? person.gender === genderFilter : true;
    if (genderFilter === "all") matchesGender = true;
    return matchesSearch && matchesGender;
  });

  const sortPeople = (people: Person[]) => {
    return people.sort((a: Person, b: Person) => {
      if (sortBy === "name") {
        return sortDirection === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      }
      if (sortBy === "gender") {
        return sortDirection === "asc"
          ? a.gender.localeCompare(b.gender)
          : b.gender.localeCompare(a.gender);
      }
      return 0;
    });
  };

  const handleSortToggle = () => {
    setSortDirection((prevDirection) =>
      prevDirection === "asc" ? "desc" : "asc"
    );
  };

  const columns = [
    {
      header: (
        <Group spacing={5} align="center">
          Name
          <ActionIcon onClick={handleSortToggle}>
            {sortDirection === "asc" ? (
              <IconChevronUp size={16} color="black" />
            ) : (
              <IconChevronDown size={16} color="black" />
            )}
          </ActionIcon>
        </Group>
      ),
      accessor: "name",
    },
    { header: "Gender", accessor: "gender" },
    { header: "Birth Year", accessor: "birth_year" },
    {
      header: "Details",
      accessor: "",
      isLink: true,
      linkPath: (row: Person) => `/people/${filteredPeople?.indexOf(row) + 1}`,
    },
  ];

  return (
    <PageContainer>
      <Group style={{ gap: "2rem" }} align="center">
        <Title
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#333",
            textAlign: "left",
            textTransform: "capitalize",
            flex: 1,
          }}
        >
          People
        </Title>

        <TextInput
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          mt="lg"
          mb="lg"
          styles={{
            input: {
              background: theme.colors.shades[0],
              borderRadius: "2px solid black",
            },
          }}
          style={{ flex: 2, width: 200 }}
        />
        <Select
          label="Gender Filter"
          value={genderFilter}
          onChange={setGenderFilter}
          data={["all", "male", "female", "n/a"].map((gender) => ({
            value: gender,
            label: gender.toUpperCase(),
          }))}
          placeholder="Filter by Gender"
          style={{ flex: 3, display: "flex", alignItems: "center" }}
        />
      </Group>

      <Group align="center" spacing="xl" mt="lg" display={"flex"}></Group>

      <Table columns={columns} data={sortPeople(filteredPeople || [])} />

      <Pagination
        total={Math.ceil(data?.count / 10)}
        value={currentPage}
        onChange={setCurrentPage}
        position="center"
        mt="lg"
      />
    </PageContainer>
  );
};

export default Landing;
