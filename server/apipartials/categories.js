const express = require('express');

const router = express.Router();

const categoryController = require('../controllers/category.controller.js');



router.get("/", async (req, res, next) => {
  try {
    const results = await categoryController.search();
    res.json(results);
  } catch (e) {
    next();
  }
});
    
router.post("/", async (req, res, next) => {
    try {
      const results = await categoryController.create(req.body);
      res.send("success");
    } catch (e) {
      next();
    }
  });

module.exports = router;