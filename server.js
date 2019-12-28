const express = require("express");
const cors = require("cors");
const products = require("./server/apipartials/products");
const category = require("./server/apipartials/categories")

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(cors());

app.use('/products', products);
app.use('/categories', category);
app.use('/brands', require("./server/apipartials/brand"));


app.listen(process.env.PORT, () => {
  console.log(`Server started at port: ${process.env.PORT}`);
});
