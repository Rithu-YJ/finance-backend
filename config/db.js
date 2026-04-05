// Import Sequelize
const { Sequelize } = require("sequelize");

// Create database connection
const sequelize = new Sequelize({
  dialect: "sqlite", // Type of database
  storage: "./database.sqlite", // File where data will be stored
});

// Export connection
module.exports = sequelize;
