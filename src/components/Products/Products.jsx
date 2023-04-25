import { Grid } from "@mui/material";
import Product from "./Product/Product";

const p = [
  { id: 1, name: "qwe", desc: "qweqweqwe", price: "$10" },
  { id: 2, name: "qwasde", desc: "asdqweqweqwe", price: "$10" },
];

const Products = ({ products, handleAddToCart }) => {
  return (
    <main>
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
