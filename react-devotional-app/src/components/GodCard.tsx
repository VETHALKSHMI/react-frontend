import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

interface GodCardInterface {
  godName: string;
  godImage: string;
  onClick?: () => void;
}

const GodCard = (GodCardProps: GodCardInterface) => {
  const { godName, godImage, onClick } = GodCardProps;
  return (
    <Card sx={{ height: "100%", borderRadius: 3 }} onClick={onClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={godImage}
          alt={godName}
          sx={{
            width: "100%",
            objectFit: "contain",
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
