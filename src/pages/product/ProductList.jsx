import { useState } from "react";
import { useQuery } from "react-query";
import { getProductAll } from "../../apis/product";
import ProductCard from "../../components/product/ProductCard";
import { Grid, Snackbar } from "@mui/material";
function ProductList(props) {
  const { setCart } = props;
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const { status, data } = useQuery("getProductAll", getProductAll);

  if (status === "loading") {
    return <span>로딩</span>;
  }

  if (status === "error") {
    return <span>에러</span>;
  }

  return (
    <Grid container spacing={2} p={2}>
      {data.data.map((product) => (
        <Grid item xs={3} key={product.id}>
          <ProductCard
            product={product}
            setCart={setCart}
            setSnackbarOpen={setSnackbarOpen}
          />
        </Grid>
      ))}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={1000}
        onClose={() => {
          setSnackbarOpen(false);
        }}
        message="Added"
      />
    </Grid>
  );
}
export default ProductList;
