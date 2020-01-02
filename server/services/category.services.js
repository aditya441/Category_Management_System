const mysql = require('./dbConnections.js');

function promisifyQueryForCategories(query, user) {
    return new Promise((resolve, reject) => {
      mysql.query(query, user, (err, results) => {
        if (err) reject(err);
        else {
          resolve(results);
        }
      });
    });
}

function getAllCategories() {
    return promisifyQueryForCategories('SELECT * FROM categories');
}

function createNewCategory(categoryData) {
    return promisifyQueryForCategories('INSERT INTO categories(category_name, parentId) VALUES(?, ?)', categoryData)
}

// function updateExistingCategory(id, categoryData) {
//     return promisifyQueryForCategories('UPDATE categories SET ? where categoryId = ?', [categoryData, id]);
// }

// function getCategoryById(id) {
//     return promisifyQueryForCategories('SELECT * FROM categories where categoryId=?', id)
// }

// function deleteCategoryById(id) {
//     return promisifyQueryForCategories('DELETE FROM categories where categoryId=?', id)
// }

// function getProductById(id) {
//     return promisifyQueryForProducts('SELECT * FROM products where productId=?', id)
// }

// function getCategoriesByBrandName(categoryName,name) {
//     return promisifyQueryForCategories('SELECT * FROM categories where categoryName=? AND brandName=?', [categoryName, name]);
// }

// function getCategoryByName(name) {
//     return promisifyQueryForCategories('SELECT * FROM categories where categoryName=?', name);
// }

// function getProductByCategoryId(id) {
//     return promisifyQueryForCategories('SELECT * FROM products where categoryId=?',id);
// }

const search = async (request) => {
    const categories = await getAllCategories();
    return categories;
}

const create = async (request) => {
    const category = await createNewCategory(request.body);
    return category;
}

// const updateById = async (request) => {
//     const updatedCategory = await updateExistingCategory(request.params.id,request.body);
//     return updatedCategory;
// }

// const getById = async (request) => {
//     const categoryData = await getCategoryById(request.params.id);
//     return categoryData;
// }

// const deleteById = async (request) => {
//     const deletedCategory = await deleteCategoryById(request.params.id);
//     return deletedCategory;
// }

// const getCategoriesAndProductByBrand = async (request) => {
//     const productList = [];
//     const productAndCategories = {};
//     const categories = await getCategoriesByBrandName(reuqest.params.categoryName,request.params.name);
//     // categories.forEach((category) => {
//     //     const product = await getProductByCategoryId(category.cid);
//     //     productList.push(product);
//     // })
//     for(let i=0; i<categories.length; i++) {
//         const product = await getProductByCategoryId(category.cid);
//         productList.push(product);
//     }
//     productAndCategories.categoriesList = categories;
//     productAndCategories.products = productList;

//     return productAndCategories;
// }

// const getProductByCategory =  async (request) => {
//     const productList = [];
//     const categories = await getCategoryByName(request.params.name);
//     // categories.forEach(category => {
//     //     const product = await getProductByCategoryId(category.cid);
//     //     productList.push(product);
//     // });
//     for(let i=0; i<categories.length; i++) {
//         const product = await getProductByCategoryId(category.cid);
//         productList.push(product);
//     }
//     return productList;
// }

module.exports = {
    getAllCategories,
    createNewCategory,
    // getById,
    // updateById,
    // deleteById,
    // getCategoriesAndProductByBrand,
    // getProductByCategory
}


