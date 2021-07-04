const router = require("express").Router();

const {
  getAllCategories,
  getCategoryById,
  addCategory,
  updateCategory,
  deleteCategory,
} = require("../../controllers/categories");

router.get("/", getAllCategories);
router.get("/:id", getCategoryById);
router.post("/", addCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

module.exports = router;
