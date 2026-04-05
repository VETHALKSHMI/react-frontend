import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate } from "react-router-dom";
import { godsData } from "../data/godCardsData";
import IconButton from "@mui/material/IconButton/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Stack from "@mui/material/Stack/Stack";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

interface HeaderProps {
  mode: "light" | "dark";
  toggleTheme: () => void;
}

const Header = ({ mode, toggleTheme }: HeaderProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathParts = location.pathname.split("/");
  const currentId = pathParts[1];

  const currentGod = godsData.find((god) => god.id === currentId);

  const mainTitle = currentGod ? currentGod.tamilLyricsTitle : "தமிழ் அருள்";
  const subTitle = currentGod ? currentGod.englishLyricsTitle : "Tamil Arul";

  const isHome = location.pathname === "/";

  return (
    <Box
      component="header"
      sx={{
        height: "10vh",
        width: "100%",
        bgcolor: "primary.main",
        borderBottom: (theme) => `3px solid ${theme.palette.secondary.main}`,
        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)", 
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
        zIndex: 1100,
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      {!isHome && (
        <IconButton
          onClick={() => navigate("/")}
          sx={{
            position: "absolute",
            left: { xs: 10, md: 25 },
            color: "secondary.main",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "rgba(212, 175, 55, 0.1)",
              transform: "translateX(-4px)",
              color: "#FFF",
            },
          }}
        >
          <ArrowBackIosNewIcon
            sx={{ fontSize: { xs: "1.2rem", md: "1.8rem" } }}
          />
        </IconButton>
      )}
      <Typography
        sx={{
          fontFamily: "'Arima Madurai', cursive",
          color: "secondary.main", 
          transition: "color 0.5s ease",
          fontSize: { xs: "1.5rem", md: "2.2rem" },
          fontWeight: 800,
          letterSpacing: "1px",
          textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
          // textShadow: mode === 'dark' ? '0px 0px 10px rgba(212, 175, 55, 0.4)' : 'none'
        }}
      >
        {mainTitle}
      </Typography>

      <Typography
        sx={{
          color: "rgba(212, 175, 55, 0.7)",
          fontSize: "0.8rem",
          textTransform: "uppercase",
          letterSpacing: "3px",
        }}
      >
        {subTitle}
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={1}
        sx={{ position: "absolute", right: 20, zIndex: 1000 }}
      >
        <IconButton
          onClick={() => toggleTheme()}
          sx={{ color: mode === "light" ? "#D4AF37" : "#E0E0E0" }}
        >
          <LightModeIcon />
        </IconButton>
        <IconButton
          onClick={() => toggleTheme()}
          sx={{ color: mode === "dark" ? "#D4AF37" : "#E0E0E0", mt: { xs: 1, sm: 0 } }}
        >
          <DarkModeIcon />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default Header;
