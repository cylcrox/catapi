import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Tooltip,
  Typography
} from "@mui/material";

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
    <Card id={props.id} sx={{ margin: "16px", width: "400px", display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent>
          <Typography sx={{ margin: "4px" }} variant="body2">
            Breed: {props.breed}
          </Typography>
          <Tooltip title={props.favorite ? "Remove from favorites" : "Add to favorites"}>
            <IconButton
              sx={{ margin: "4px" }}
              id={`toggleFavorite-${props.id}`}
              onClick={toggleFavorite}
              aria-label="add to favorites"
            >
              <FavoriteIcon color={props.favorite ? "primary" : "disabled"} />
            </IconButton>
          </Tooltip>
        </CardContent>
      </Box>
      <CardMedia
        id={`card_image_${props.id}`}
        width="400px"
        height="250px"
        component="img"
        image={props.imageUrl}
        alt={props.altText}
      />
    </Card>
  );
}
