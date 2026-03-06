import { Box, Container, Grid } from "@mui/material";
import { godsData } from "../data/godCardsData";
import GodCard from "../components/GodCard";

const Home = () => {
  return (
    <Box sx={{ height: "88vh", overflowY: "auto", py: 4, bgcolor: "#f9f9f9" }}>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          {godsData?.map((god) => (
            <Grid item xs={12} sm={6} md={4} key={god.id}>
              <GodCard godName={god.title} godImage={god.image} godId={god.id} tamilName={god.tamilName} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
