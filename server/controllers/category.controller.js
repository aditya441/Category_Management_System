const categoryService = require('../services/category.services');


const search = async request => {
  const category = await categoryService.getAllCategories();
  return category;
};

const create = async data => {
    const category = await categoryService.createNewCategory([data.name, data.parentId]);
    return category;
  };


module.exports = {
    search,
    create,
}

