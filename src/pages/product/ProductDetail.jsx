import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getProductById } from "../../apis/product";
function ProductDetail() {
  const { id } = useParams();
  const { status, data } = useQuery(["getProductById", id], getProductById);

  if (status === "loading") {
    return <span>로딩</span>;
  }

  if (status === "error") {
    return <span>에러</span>;
  }

  return <div>{data.data}</div>;
}

export default ProductDetail;
