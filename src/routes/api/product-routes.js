const router = require("express").Router();

const {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../../controllers/products");

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", addProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
