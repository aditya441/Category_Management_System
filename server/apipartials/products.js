const express = require("express");

const router = express.Router();

const productController = require("../controllers/product.controller.js");


router.get("/", async (req, res, next) => {
  try {
    const results = await productController.search();
    res.json(results);
  } catch (e) {
    next();
  }
});

router.post("/", async (req, res, next) => {
  try {
    const results = await productController.create(req.body);
    res.send("success");
  } catch (e) {
    next();
  }
});

module.exports = router;
