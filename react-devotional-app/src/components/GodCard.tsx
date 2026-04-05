import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useNavigate } from "react-router-dom";

interface GodCardInterface {
  songId: string | number;
  godId: string | number;
  godName?: string;
  tamilName: string;
  godImage: string;
  onClick?: () => void;
}

const GodCard = (GodCardProps: GodCardInterface) => {
  const navigate = useNavigate();
  const { tamilName, godImage, godId, songId } = GodCardProps;
  
  return (
    <Card
      sx={{
        height: { xs: "calc(100vh - 120px)", sm: "100%" },
        display: "flex",
        flexDirection: "column",
        borderRadius: "16px",
        backgroundColor: "background.paper",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    position: "relative",
    overflow: "hidden",
    border: (theme) => `1px solid ${theme.palette.mode === 'dark' ? 'rgba(212, 175, 55, 0.2)' : 'transparent'}`,
    "&:hover": {
      transform: "translateY(-8px)",
      borderColor: "secondary.main", 
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5), 0px 0px 20px rgba(212, 175, 55, 0.2)",
    },
        cursor: "pointer",
      }}
      onClick={() => navigate(`/${godId}/${songId}`)}
    >
      <CardActionArea
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        <CardMedia
          component="img"
          image={godImage}
          alt={tamilName}
          sx={{
            width: "100%",
            height: { xs: "60vh", sm: 260 },
            objectFit: "contain",
            flexGrow: 1,
          }}
        />
        <CardContent>
          <Typography
            variant="h6"
            textAlign="center"
            sx={{
              color: "text.secondary",
              fontWeight: 700,
              fontSize: "1.2rem",
              textAlign: "center",
              mt: 2,
            }}
          >
            {tamilName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default GodCard;
