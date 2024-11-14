import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { IconArrowLeft } from "@tabler/icons-react";

import { Container, Button } from "@mantine/core";
import CustomLoader from "../components/CustomLoader";
import PlanetDetailsCard from "../components/sections/PlanetDetailsCard";
import { fetchPlanetDetail } from "../services/swapi";
import PageContainer from "../components/PageContainer";

const PlanetDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data, isLoading } = useQuery(["PlanetDetails  ", id], () =>
    fetchPlanetDetail(id!)
  );

  if (isLoading) return <CustomLoader />;

  return (
    <PageContainer>
      <div
        style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
      >
        <Button
          variant="light"
          color="blue"
          onClick={() => navigate(-1)} // Navigate back to the previous page
          style={{ marginBottom: "20px" }}
        >
          {" "}
          <IconArrowLeft size={16} style={{ marginRight: 8 }} />
          Back
        </Button>
      </div>

      <PlanetDetailsCard data={data} />
    </PageContainer>
  );
};

export default PlanetDetail;
