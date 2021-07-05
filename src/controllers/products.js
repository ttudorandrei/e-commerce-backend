const { Product, Category, Tag } = require("../models");

// get all products
const getAllProducts = async (req, res) => {
  try {
    const productData = await Product.findAll({
      include: [
        {
          model: Category,
          attributes: ["category_name"],
        },
        {
          model: Tag,
          attributes: ["tag_name"],
        },
      ],
    });
    res.json(productData);
  } catch (error) {
    console.info(`[ERROR]: ${error.message}`);
    res.status(500).json({
      error: "Failed to get products",
    });
  }
};

// get one product
const getProductById = async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id, {
      include: [
        {
          model: Category,
          attributes: ["category_name"],
        },
        {
          model: Tag,
          attributes: ["tag_name"],
        },
      ],
    });
    res.json(productData);
  } catch (error) {
    console.info(`[ERROR]: ${error.message}`);
    res.status(500).json({
      error: "Failed to get specified product",
    });
  }
};

// create new product
const addProduct = async (req, res) => {
  /* req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
  try {
    const newProduct = await Product.create(req.body);
    res.json(newProduct);
  } catch (error) {
    console.info(`[ERROR]: ${error.message}`);
    res.status(500).json({
      error: "Failed to post specified product",
    });
  }
};

// update product
const updateProduct = async (req, res) => {
  try {
    const productData = await Product.update(req.body, {
      where: { id: +req.params.id },
    });
    res.json(productData);
  } catch (error) {
    console.info(`[ERROR]: ${error.message}`);
    res.status(400).jason({ error: "Failed to update specified product" });
  }
};

// delete product
const deleteProduct = async (req, res) => {
  try {
    const categoryData = await Product.destroy({
      where: {
        id: +req.params.id,
      },
    });
    res.json(categoryData);
  } catch (error) {
    console.info(`[ERROR]: ${error.message}`);
    res.status(400).json({ error: "Failed to delete specified tag" });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};
