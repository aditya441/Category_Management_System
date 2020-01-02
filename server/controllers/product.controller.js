const productService = require("../services/product.services");

const search = async request => {
  const product = await productService.getAllProducts();
  return product;
};

const create = async data => {
  const product = await productService.createNewProduct([data.name, data.category, data.brand]);
  return product;
};


module.exports = {
  search,
  create
};
