import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/ui/header/Header";
import CartList from "./pages/cart/CartList";
import ProductList from "./pages/product/ProductList";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/product" Component={ProductList} />
        <Route path="/cart" Component={CartList} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
