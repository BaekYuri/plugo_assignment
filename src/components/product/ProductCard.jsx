import { Card, CardMedia, CardContent, Typography } from "@mui/material";
function ProductCard(props) {
  const { product } = props;
  return (
    <Card>
      <CardMedia component="img" image={product.image} alt="Paella dish" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.price}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
