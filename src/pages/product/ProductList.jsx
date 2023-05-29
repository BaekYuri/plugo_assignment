import { useQuery } from "react-query";
import { getProduct } from "../../apis/product";
import ProductCard from "../../components/product/ProductCard";
function ProductList() {
  const query = useQuery("product", getProduct);
  return (
    <div>
      {query.data ? (
        query.data.data.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))
      ) : (
        <span>등록된 상품이 없습니다.</span>
      )}
    </div>
  );
}
export default ProductList;
