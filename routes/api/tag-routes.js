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

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tags = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(tags);
  } catch (err) {
    console.info(`[ERROR]: ${err.message}`);
    res.status(500).json({
      error: "No tag found to update with this ID.",
    });
  }
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tags = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!tags) {
      res.status(404).json({
        message: "No tag found with this ID.",
      });
      return;
    }
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
