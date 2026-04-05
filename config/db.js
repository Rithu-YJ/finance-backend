// Import Sequelize
const { Sequelize } = require("sequelize");

// Create database connection
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres", // Type of database
  protocol: "postgres",
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

// Export connection
module.exports = sequelize;
