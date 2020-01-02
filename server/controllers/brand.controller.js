const brandService = require('../services/brand.services');


const search = async request => {
  const brand = await brandService.getAllBrand();
  return brand;
};

const create = async data => {
      const brand = await brandService.createNewBrand([data.name]);
      return brand;
    };

module.exports = {
    create,
    search
}