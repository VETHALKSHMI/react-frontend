import { Box, ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { LyricsPage } from "./pages/LyricsPage";
import { useMemo, useState } from "react";
import { getDevotionalTheme } from "./theme";

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');
  const theme = useMemo(() => createTheme(getDevotionalTheme(mode)), [mode]);
  const toggleTheme = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));

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
          <Header mode={mode} toggleTheme={toggleTheme} />
          <Box sx={{ flex: 1, overflow: "auto", pt: "10vh", bgcolor: "background.default", transition: "background-color 0.5s ease-in-out, color 0.5s ease-in-out" }}>
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
