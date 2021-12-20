const router = require("express").Router();
const { Category, Product } = require("../../models");
const { findAll } = require("../../models/Product");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  // include its associated Products
  try {
    const categories = await Category.findAll();
    res.status(200).json(categories);
  } catch (err) {
    console.log(err);
    res.status(500).json("Error while retrieving data from database");
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categories = await Category.findByPk(req.params.id);
    res.status(200).json(categories);
  } catch (err) {
    console.log(err);
    res.status(500).json("Error while retrieving data from database");
  }
});

router.post("/", (req, res) => {
  // create a new category
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    const categories = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(categories);
  } catch (err) {
    console.info(`[ERROR]: ${err.message}`);
    res.status(500).json({
      error: "No category to update with this ID.",
    });
  }
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
