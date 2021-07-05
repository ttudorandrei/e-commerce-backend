const { Tag, Product } = require("../models");

// find all tags
const getAllTags = async (req, res) => {
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
    console.info(`[ERROR]: ${error.message}`);
    res.status(500).json({
      error: "Failed to get tags",
    });
  }
};

// find a single tag by its `id`
const getTagById = async (req, res) => {
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
    console.info(`[ERROR]: ${error.message}`);
    res.status(500).json({
      error: "Failed to get specified tag",
    });
  }
};

// create a new tag
const addTag = async (req, res) => {
  try {
    const newTag = await Tag.create(req.body);
    res.json(newTag);
  } catch (error) {
    console.info(`[ERROR]: ${error.message}`);
    res.status(500).json({
      error: "Failed to post specified tag",
    });
  }
};

// update a tag's name by its `id` value
const updateTag = async (req, res) => {
  try {
    const tagData = await Tag.update(req.body, {
      where: {
        id: +req.params.id,
      },
    });
    res.json(tagData);
  } catch (error) {
    console.info(`[ERROR]: ${error.message}`);
    res.status(400).jason({ error: "Failed to update specified tag" });
  }
};

// delete on tag by its `id` value
const deleteTag = async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: +req.params.id,
      },
    });
    res.json(tagData);
  } catch (error) {
    console.info(`[ERROR]: ${error.message}`);
    res.status(400).json({ error: "Failed to delete specified tag!" });
  }
};

module.exports = { getAllTags, getTagById, addTag, updateTag, deleteTag };
