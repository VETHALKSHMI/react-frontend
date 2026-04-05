import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate } from "react-router-dom";
import { godsData } from "../data/godCardsData";
import IconButton from "@mui/material/IconButton/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Header = () => {
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
        backgroundColor: "#5D0E11", 
        // backgroundColor: "#36454F", 
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        borderBottom: "3px solid #D4AF37", // Gold line for premium feel
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
            color: "#D4AF37",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "rgba(212, 175, 55, 0.1)", 
              transform: "translateX(-4px)", 
              color: "#FFF",
            }
          }}
        >
          <ArrowBackIosNewIcon sx={{ fontSize: { xs: "1.2rem", md: "1.8rem" } }} />
        </IconButton>
      )}
      <Typography
        sx={{
          fontFamily: "'Arima Madurai', cursive",
          color: "#D4AF37", // Gold text
          fontSize: { xs: "1.5rem", md: "2.2rem" },
          fontWeight: 800,
          letterSpacing: "1px",
          textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
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
    </Box>
  );
};

export default Header;
