import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

function Header() {
  return (
    <Box
      p={2}
      sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <Typography sx={{ minWidth: 100 }} variant="h5">
          Home
        </Typography>
      </Link>
      <Link to="/product" style={{ textDecoration: "none" }}>
        <Typography sx={{ minWidth: 100 }} variant="h6">
          Product
        </Typography>
      </Link>
      <Link to="/cart" style={{ textDecoration: "none" }}>
        <Typography sx={{ minWidth: 100 }} variant="h6">
          Cart
        </Typography>
      </Link>
      <Link to="/admin/product" style={{ textDecoration: "none" }}>
        <Typography sx={{ minWidth: 100 }} variant="h6">
          Add Product
        </Typography>
      </Link>
    </Box>
  );
}

export default Header;
