import notFound from "../assets/404.jpg";
import PageContainer from "../components/PageContainer";

const PageNotFound = () => {
  return (
    <PageContainer
      size="md"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh", 
      }}
    >
      <img
        src={notFound}
        alt="404"
        style={{
          width: "100%",
          maxWidth: "900px",
          height: "auto",
          objectFit: "cover",
        }}
      />
    </PageContainer>
  );
};

export default PageNotFound;
