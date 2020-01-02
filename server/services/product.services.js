const mysql = require("./dbConnections.js");

function promisifyQueryForProducts(query, user) {
  return new Promise((resolve, reject) => {
    mysql.query(query, user, (err, results) => {
      if (err) reject(err);
      else {
        resolve(results);
      }
    });
  });
}

function getAllProducts() {
  return promisifyQueryForProducts("SELECT * FROM product");
}

function createNewProduct(productData) {
  return promisifyQueryForProducts("INSERT INTO product(product_name, category, brand) VALUES(?, ?, ?)", productData);
}

// function updateExistingProduct(id, productData) {
//     return promisifyQueryForProducts('UPDATE products SET ? where productId = ?', [productData, id]);
// }

// function getProductById(id) {
//     return promisifyQueryForProducts('SELECT * FROM products where productId=?', id)
// }

// const search = async (request) => {
//     try {
//         const products = await getAllProducts();
//         return products;
//     }
//     catch (error) {
//        console.log(error);
//     }
// }

// const create = async (request) => {
//     const product = await createNewProduct(request.body);
//     return product;
// }

// const updateById = async (request) => {
//     const updatedProduct = await updateExistingProduct(request.params.id,request.body);
//     return updatedProduct;
// }

// const getById = async (request) => {
//     const productData = await getProductById(request.params.id);
//     return productData;
// }

// const deleteById = async (request) => {
//     const deletedProduct = await deleteProductById(request.params.id);
//     return deletedProduct;
// }

module.exports = {
  getAllProducts,
  createNewProduct
  // getById,
  // updateById,
  // deleteById
};
