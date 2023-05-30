import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/ui/header/Header";
import CartList from "./pages/cart/CartList";
import ProductList from "./pages/product/ProductList";
import ProductDetail from "./pages/product/ProductDetail";
import "./App.css";
import { getCart } from "./utils/cart";

function App() {
  const [cart, setCart] = useState(getCart());
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/product" element={<ProductList setCart={setCart} />} />
        <Route
          path="/product/:id"
          element={<ProductDetail setCart={setCart} />}
        />
        <Route
          path="/cart"
          element={<CartList cart={cart} setCart={setCart} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
