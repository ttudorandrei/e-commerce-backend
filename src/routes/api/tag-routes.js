const router = require("express").Router();

const {
  getAllTags,
  getTagById,
  addTag,
  updateTag,
  deleteTag,
} = require("../../controllers/tags");

router.get("/", getAllTags);
router.get("/:id", getTagById);
router.post("/", addTag);
router.put("/:id", updateTag);
router.delete("/:id", deleteTag);

module.exports = router;
