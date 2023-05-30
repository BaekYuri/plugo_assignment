import { useRef } from "react";
import { Grid, TextField, Button } from "@mui/material";
function AddProduct() {
  const titleRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const imageRef = useRef();

  const buttonHandler = () => {
    if (
      titleRef.current.value &&
      priceRef.current.value &&
      descriptionRef.current.value &&
      imageRef.current.value
    ) {
      alert("Added.");
    } else {
      alert("Write all.");
    }
  };
  return (
    <Grid container spacing={2} p={2}>
      <Grid item xs={12} md={6}>
        <TextField label="Title" fullWidth inputRef={titleRef} />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField label="Price" fullWidth inputRef={priceRef} />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Description"
          multiline
          rows={4}
          fullWidth
          inputRef={descriptionRef}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth type="file" inputRef={imageRef} />
      </Grid>
      <Grid item xs={12} md={9}></Grid>
      <Grid item xs={12} md={3}>
        <Button fullWidth onClick={buttonHandler}>
          Add Product
        </Button>
      </Grid>
    </Grid>
  );
}

export default AddProduct;
