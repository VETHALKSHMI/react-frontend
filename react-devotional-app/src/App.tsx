import {
  Box,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Grid,
  Container,
} from "@mui/material";
import Header from "./components/Header";
import GodCard from "./components/GodCard";
import { godsData } from "./data/godCardsData";

const theme = createTheme({
  palette: {
    primary: {
      main: "#007FFF",
      dark: "#0066CC",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <Box sx={{ height: "12vh", width: "100%", flexShrink: 0 }}>
          <Header />
        </Box>
        <Box
          sx={{ height: "88vh", overflowY: "auto", py: 4, bgcolor: "#f9f9f9" }}
        >
          <Container maxWidth="xl">
            <Grid container spacing={3}>
              {godsData?.map((god) => (
                <Grid item xs={12} sm={6} md={4} key={god.id}>
                  <GodCard godName={god.title} godImage={god.image}/>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
