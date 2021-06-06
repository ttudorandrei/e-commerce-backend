const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  // ~~~~~~~~ "include" WIP
  try {
    const tagData = await Tag.findAll({
      include: [
        {
          model: Product,
          attributes: ["product_name"],
        },
      ],
    });
    res.json(tagData);
  } catch (error) {
    console.log(`[ERROR]: ${error.message}`);
    res.status(500).json({
      error: "Failed to get tags",
    });
  }
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id);
    res.json(tagData);
  } catch (error) {
    console.log(`[ERROR]: ${error.message}`);
    res.status(500).json({
      error: "Failed to get specified tag",
    });
  }
});

router.post("/", (req, res) => {
  // create a new tag
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = await Tag.destroy({
      where: {
        id: +req.params.id,
      },
    });
    res.json(tagData);
  } catch (error) {
    console.log(`[ERROR]: ${error.message}`);
    res.status(400).json({ error: "Failed to delete specified tag!" });
  }
});

module.exports = router;
