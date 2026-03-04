import { Box, ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LyricsPage from "./pages/LyricsPage";

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
      <BrowserRouter>
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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:godId/lyrics" element={<LyricsPage />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
