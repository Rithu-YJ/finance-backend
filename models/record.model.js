// Import data types
const { DataTypes } = require("sequelize");

// Import database connection
const sequelize = require("../config/db");

// Define Financial Record table
const Record = sequelize.define("Record", {
  // Transaction amount (required)
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },

  // Type of transaction: income or expense
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  // Category (e.g., Food, Rent, Salary)
  category: {
    type: DataTypes.STRING,
  },

  // Date of transaction
  date: {
    type: DataTypes.DATE,
  },

  // Optional notes/description
  notes: {
    type: DataTypes.STRING,
  },

  // ID of the user who created this record
  created_by: {
    type: DataTypes.INTEGER,
  },
});

// Export model
module.exports = Record;
