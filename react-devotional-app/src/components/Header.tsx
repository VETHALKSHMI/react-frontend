import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <>
      <CssBaseline />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "primary.main",     
            color: "primary.contrastText",
            height: "100%",
            textAlign: "center",
          }}
        >
          <Typography variant="h2">Tamil Devotional World</Typography>
        </Box>
        
    </>
  );
};

export default Header;
