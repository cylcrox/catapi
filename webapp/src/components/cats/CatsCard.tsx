import { Card, CardMedia } from "@mui/material";

export interface CatsCardProps {
  id: string;
  altText: string;
  imageUrl: string;
  breed: string;
  favorite: boolean;
}

export function CatsCard(props: CatsCardProps) {
  return (
    <Card id={props.id}>
      <CardMedia
        id={`card_image_${props.id}`}
        component="img"
        height="60px"
        width="60px"
        image={props.imageUrl}
        alt={props.altText}
      />
    </Card>
  );
}
