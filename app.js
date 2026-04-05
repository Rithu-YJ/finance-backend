// Import Express framework
const express = require("express");

// Load environment variables from .env file
require("dotenv").config();

// Import DB
const sequelize = require("./config/db");

//Connect models
require("./models/user.model");
require("./models/record.model");

// Import routes
const userRoutes = require("./routes/user.routes");
const recordRoutes = require("./routes/record.routes");

// Import middleware
const verifyToken = require("./middleware/auth.middleware");
const checkRole = require("./middleware/role.middleware");

// Create server app
const app = express();

// Middleware to handle JSON data from requests
app.use(express.json());

// Use user routes
app.use("/api/users", userRoutes);
app.use("/api/records", recordRoutes);

// Basic route to test server
app.get("/", (req, res) => {
  res.send("API Running...");
});

// Protected route
app.get("/api/protected", verifyToken, (req, res) => {
  res.json({
    message: "Protected route accessed",
    user: req.user,
  });
});

// Admin-only route
app.get("/api/admin", verifyToken, checkRole(["Admin"]), (req, res) => {
  res.json({
    message: "Welcome Admin",
  });
});

// Global error handler
app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message || "Internal Server Error",
  });
});

// Use PORT from .env file
const PORT = process.env.PORT || 3000;

// Connect database
sequelize.sync().then(() => {
  console.log("Database connected");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
