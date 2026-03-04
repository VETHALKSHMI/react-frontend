import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useNavigate } from "react-router-dom";

interface GodCardInterface {
  godId: string | number;
  godName: string;
  godImage: string;
  onClick?: () => void;
}

const GodCard = (GodCardProps: GodCardInterface) => {
  const navigate = useNavigate();
  console.log("navigate", navigate);

  const { godName, godImage, godId} = GodCardProps;
  return (
    <Card
      sx={{
        height: { xs: "calc(100vh - 120px)", sm: "100%" }, // 120px: adjust for header/margins
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
      }}
      onClick={() => navigate(`/${godId}/lyrics`)}
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
          alt={godName}
          sx={{
            width: "100%",
            height: { xs: "60vh", sm: 260 },
            objectFit: "contain",
            flexGrow: 1,
            transition: "transform 0.3s ease-in-out",
            "&:hover": { transform: "scale(1.03)" },
          }}
        />
        <CardContent>
          <Typography variant="h6" textAlign="center">
            {godName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default GodCard;
