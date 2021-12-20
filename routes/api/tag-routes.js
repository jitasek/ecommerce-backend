const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");
const { findAll } = require("../../models/Product");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tags = await Tag.findAll({
      include: Product,
    });
    res.status(200).json(tags);
  } catch (err) {
    console.log(err);
    res.status(500).json("Error while retrieving tags data from database");
  }
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tags = await Tag.findByPk(req.params.id, {
      include: Product,
    });
    res.status(200).json(tags);
  } catch (err) {
    console.log(err);
    res.status(500).json("Error while retrieving tag data from database");
  }
});

router.post("/", (req, res) => {
  // create a new tag
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
