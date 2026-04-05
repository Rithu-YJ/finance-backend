// Import Express
const express = require("express");

// Create router
const router = express.Router();

// Import controller function
const { registerUser, loginUser } = require("../controllers/user.controller");

// Register API route
router.post("/register", registerUser);

// Login API route (handles user authentication)
router.post("/login", loginUser);

// Export router
module.exports = router;
