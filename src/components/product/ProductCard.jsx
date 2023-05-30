import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import { addCart } from "../../utils/cart";
import { Link } from "react-router-dom";
function ProductCard(props) {
  const { product, setCart, setSnackbarOpen } = props;
  const cartButtonHandler = () => {
    setCart(addCart(product, 1));
    setSnackbarOpen(true);
  };
  return (
    <Card sx={{ height: "480px" }}>
      <CardMedia
        component="img"
        image={product.image}
        alt={product.title}
        height={300}
      />
      <CardContent>
        <Link to={`/product/${product.id}`}>
          <Typography gutterBottom variant="h6" component="div">
            {product.title}
          </Typography>
        </Link>
        <Typography variant="body2" color="text.secondary">
          {product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={cartButtonHandler}>
          Add Cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
