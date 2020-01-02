const express = require('express');

const router = express.Router();

const brandController = require('../controllers/brand.controller.js');


router.get("/", async (req, res, next) => {
  try {
    const results = await brandController.search();
    res.json(results);
  } catch (e) {
    next();
  }
});

router.post("/", async (req, res, next) => {
      try {
        const results = await brandController.create(req.body);
        res.send("success");
      } catch (e) {
        next();
      }
    });

module.exports = router;