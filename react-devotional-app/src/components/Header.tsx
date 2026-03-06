import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Header = () => {
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
        position: "relative",
      }}
    >
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
        தமிழ் அருள்
      </Typography>

      <Typography
        sx={{
          color: "rgba(212, 175, 55, 0.7)",
          fontSize: "0.8rem",
          textTransform: "uppercase",
          letterSpacing: "3px",
        }}
      >
        Devotional Lyrics
      </Typography>
    </Box>
  );
};

export default Header;
