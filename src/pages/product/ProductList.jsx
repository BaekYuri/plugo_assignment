import { useQuery } from "react-query";
import { getProductAll } from "../../apis/product";
import ProductCard from "../../components/product/ProductCard";
import { Grid } from "@mui/material";
function ProductList() {
  const { status, data } = useQuery("getProductAll", getProductAll);

  if (status === "loading") {
    return <span>로딩</span>;
  }

  if (status === "error") {
    return <span>에러</span>;
  }

  return (
    <Grid container spacing={2}>
      {data.data.map((product) => (
        <Grid item xs={3} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
export default ProductList;
