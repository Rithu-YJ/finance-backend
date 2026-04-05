// Import JWT
const jwt = require("jsonwebtoken");

// Middleware to verify token
const verifyToken = (req, res, next) => {
  try {
    // Get token from request headers
    const token = req.headers["authorization"];

    // Check if token exists
    if (!token) {
      return res.status(401).json({
        message: "No token provided",
      });
    }

    // Remove "Bearer " from token
    const actualToken = token.split(" ")[1];

    // Verify token
    const decoded = jwt.verify(actualToken, process.env.JWT_SECRET);

    // Attach user data to request
    req.user = decoded;

    // Allow request to continue
    next();
  } catch (error) {
    res.status(401).json({
      message: "Invalid token",
    });
  }
};

module.exports = verifyToken;
