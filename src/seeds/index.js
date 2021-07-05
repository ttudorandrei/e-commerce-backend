const seedCategories = require("./category-seeds");
const seedProducts = require("./product-seeds");
const seedTags = require("./tag-seeds");
const seedProductTags = require("./product-tag-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.info("\n----- DATABASE SYNCED -----\n");
  await seedCategories();
  console.info("\n----- CATEGORIES SEEDED -----\n");

  await seedProducts();
  console.info("\n----- PRODUCTS SEEDED -----\n");

  await seedTags();
  console.info("\n----- TAGS SEEDED -----\n");

  await seedProductTags();
  console.info("\n----- PRODUCT TAGS SEEDED -----\n");

  process.exit(0);
};

seedAll();
