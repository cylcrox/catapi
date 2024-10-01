import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

export interface CatsCardProps {
  id: string;
  altText: string;
  imageUrl: string;
  breed: string;
  favorite: boolean;
  toggleFavorite: (id: string) => void;
}

export function CatCard(props: CatsCardProps) {
  function toggleFavorite() {
    props.toggleFavorite(props.id);
  }

  return (
    <Card id={props.id} sx={{ margin: "16px", height: "400px", width: "400px" }}>
      <CardMedia
        id={`card_image_${props.id}`}
        width="400px"
        height="250px"
        component="img"
        image={props.imageUrl}
        alt={props.altText}
      />
      <CardContent sx={{ display: "flex", alignItems: "center" }}>
        <IconButton
          id={`toggleFavorite-${props.id}`}
          onClick={toggleFavorite}
          aria-label="add to favorites"
        >
          <FavoriteIcon color={props.favorite ? "primary" : "disabled"} />
        </IconButton>
        <Typography variant="body2">Breed: {props.breed}</Typography>
      </CardContent>
    </Card>
  );
}
