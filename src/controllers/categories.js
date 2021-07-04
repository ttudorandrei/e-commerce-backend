const { Category, Product } = require("../models");

// get all categories
const getAllCategories = async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [
        {
          model: Product,
          attributes: ["product_name"],
        },
      ],
    });
    res.json(categoryData);
  } catch (error) {
    console.log(`[ERROR]: ${error.message}`);
    res.status(500).json({
      error: "Failed to get categories",
    });
  }
};

// get a single category
const getCategoryById = async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          attributes: ["product_name"],
        },
      ],
    });
    res.json(categoryData);
  } catch (error) {
    console.log(`[ERROR]: ${error.message}`);
    res.status(500).json({
      error: "Failed to get specified category",
    });
  }
};

// add a new category
const addCategory = async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.json(newCategory);
  } catch (error) {
    console.log(`[ERROR]: ${error.message}`);
    res.status(500).json({
      error: "Failed to post specified category",
    });
  }
};

// update a category
const updateCategory = async (req, res) => {
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json(categoryData);
  } catch (error) {
    console.log(`[ERROR]: ${error.message}`);
    res.status(400).jason({ error: "Failed to update specified category" });
  }
};

// delete a category
const deleteCategory = async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: +req.params.id,
      },
    });
    res.json(categoryData);
  } catch (error) {
    console.log(`[ERROR]: ${error.message}`);
    res.status(400).json({ error: "Failed to delete specified category" });
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
  addCategory,
  updateCategory,
  deleteCategory,
};
