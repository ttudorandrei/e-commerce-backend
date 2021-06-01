const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  try {
    const categoryData = await Category.findAll();
    res.json(categoryData);
  } catch (error) {
    console.log(`[ERROR]: ${error.message}`);
    res.status(500).json({
      error: "Failed to get categories",
    });
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id);
    res.json(categoryData);
  } catch (error) {
    console.log(`[ERROR]: ${error.message}`);
    res.status(500).json({
      error: "Failed to get specified category",
    });
  }
});

// ~~~~~~~~~~~ WIP
router.post("/", async (req, res) => {
  // create a new category
});

// ~~~~~~~~~~~ WIP
router.put("/:id", async (req, res) => {
  // update a category by its `id` value
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
});

// not working atm

// [ERROR]: Cannot delete or update a parent row: a foreign key constraint fails (`ecommerce_db`.`product`, CONSTRAINT `product_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON UPDATE CASCADE)
router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(categoryData);
  } catch (error) {
    console.log(`[ERROR]: ${error.message}`);
    res.status(400).json({ error: "Failed to delete specified category" });
  }
});

module.exports = router;
