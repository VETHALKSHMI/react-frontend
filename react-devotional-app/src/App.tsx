import { Box, ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { LyricsPage } from "./pages/LyricsPage";

const theme = createTheme({
  palette: {
    background: {
      default: "#f9f9f9",
    },
  },
  typography: {
    // This sets the font for the whole app
    fontFamily: "'Noto Sans Tamil', sans-serif",
    h1: {
      fontFamily: "'Arima Madurai', cursive",
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
          <Header />
          <Box sx={{ flex: 1, overflow: "auto", pt: "10vh" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:godId/:songId" element={<LyricsPage />} />
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
