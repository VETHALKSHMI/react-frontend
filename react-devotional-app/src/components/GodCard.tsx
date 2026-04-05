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
        backgroundColor: "#FFFFFF",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        border: "1px solid #F0F0F0",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0px 12px 24px rgba(93, 14, 17, 0.1)",
          borderColor: "#D4AF37",
          backgroundColor: "#FFFEFA",
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
              color: "#5D0E11",
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
