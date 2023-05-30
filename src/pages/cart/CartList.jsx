import { useState } from "react";
import { getCart } from "../../utils/cart";
import CartCard from "../../components/cart/CartCard";

function CartList() {
  const [cart, setCart] = useState(getCart());
  return (
    <div>
      {cart.map((cartItem) => (
        <CartCard cartItem={cartItem} setCart={setCart} />
      ))}
    </div>
  );
}
export default CartList;
