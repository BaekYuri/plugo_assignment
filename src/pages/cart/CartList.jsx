import { useState } from "react";
import { Grid, Typography, Snackbar } from "@mui/material";
import CartCard from "../../components/cart/CartCard";
import { getTotalPrice } from "../../utils/cart";

function CartList(props) {
  const { cart, setCart } = props;
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  return (
    <Grid container spacing={2} p={2}>
      {cart.map((cartItem) => (
        <Grid item xs={12} md={6}>
          <CartCard
            cartItem={cartItem}
            setCart={setCart}
            setSnackbarOpen={setSnackbarOpen}
          />
        </Grid>
      ))}
      <Grid item xs={12} md={6}>
        <Typography>Total : {getTotalPrice()}</Typography>
      </Grid>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={1000}
        onClose={() => {
          setSnackbarOpen(false);
        }}
        message="Deleted"
      />
    </Grid>
  );
}
export default CartList;
