// Import data types (String, Boolean, etc.)
const { DataTypes } = require("sequelize");

// Import database connection
const sequelize = require("../config/db");

// Define User table
const User = sequelize.define("User", {
  // User's name (required)
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  // User's email (must be unique and required)
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },

  // User's password (will be stored as hashed later)
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  // Role of user (Viewer / Analyst / Admin)
  // Default role is Viewer
  role: {
    type: DataTypes.STRING,
    defaultValue: "Viewer",
  },

  // User status (true = active, false = inactive)
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});

// Export model so it can be used in other files
module.exports = User;
