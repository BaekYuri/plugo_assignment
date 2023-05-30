import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  TextField,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { updateCart, deleteCart } from "../../utils/cart";
function CartCard(props) {
  const { cartItem, setCart } = props;

  const countChangeHandler = (e) => {
    setCart(updateCart(cartItem, e.target.value));
  };

  const deleteButtonHandler = () => {
    setCart(deleteCart(cartItem.id));
  };

  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        image={cartItem.image}
        alt={cartItem.title}
        sx={{ width: 150, height: 150 }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {cartItem.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {cartItem.price}
        </Typography>
        <TextField
          type="number"
          defaultValue={cartItem.count}
          onChange={countChangeHandler}
        />
        <IconButton onClick={deleteButtonHandler}>
          <DeleteIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
}

export default CartCard;
