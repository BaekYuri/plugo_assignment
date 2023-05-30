import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import { addCart } from "../../utils/cart";
function ProductCard(props) {
  const { product } = props;

  const cartButtonHandler = () => {
    addCart(product, 1);
  };
  return (
    <Card>
      <CardMedia component="img" image={product.image} alt="Paella dish" />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={cartButtonHandler}>
          장바구니
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
