import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getProductById } from "../../apis/product";
import { addCart } from "../../utils/cart";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  TextField,
  IconButton,
  Grid,
  Snackbar,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function ProductDetail(props) {
  const { id } = useParams();
  const { setCart } = props;
  const { status, data } = useQuery(["getProductById", id], getProductById);
  const numberInputRef = useRef();
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const addButtonHandler = () => {
    setCart(addCart(data.data, numberInputRef.current.value));
    setSnackbarOpen(true);
  };
  if (status === "loading") {
    return <span>로딩</span>;
  }

  if (status === "error") {
    return <span>에러</span>;
  }
  return (
    <Grid container p={2}>
      <Card sx={{ display: "flex", width: "100%" }}>
        <CardMedia
          component="img"
          image={data.data.image}
          alt={data.data.title}
          height={400}
        />
        <CardContent sx={{ width: "70%" }}>
          <Typography gutterBottom variant="h6" component="div">
            {data.data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.data.price}
          </Typography>
          <Typography
            variant="caption"
            component="div"
            sx={{ whiteSpace: "pre-line" }}
          >
            {data.data.description}
          </Typography>
          <TextField type="number" defaultValue={1} inputRef={numberInputRef} />
          <IconButton onClick={addButtonHandler}>
            <AddIcon />
          </IconButton>
        </CardContent>
      </Card>
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

export default ProductDetail;
