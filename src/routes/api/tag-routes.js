const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
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
    const tagData = await Tag.findByPk(req.params.id, {
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
      error: "Failed to get specified tag",
    });
  }
});

router.post("/", async (req, res) => {
  // create a new tag
  const { tag_name } = req.body;
  // create a new tag
  try {
    console.log(tag_name);
    const newTagData = {
      tag_name: tag_name,
    };

    const newTag = await Tag.create(newTagData);
    res.json(newTag);
  } catch (error) {
    console.log(`[ERROR]: ${error.message}`);
    res.status(500).json({
      error: "Failed to post specified tag",
    });
  }
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagData = await Tag.update(req.body, {
      where: {
        id: +req.params.id,
      },
    });
    res.json(tagData);
  } catch (error) {
    console.log(`[ERROR]: ${error.message}`);
    res.status(400).jason({ error: "Failed to update specified tag" });
  }
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
