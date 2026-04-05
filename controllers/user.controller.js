// Import User model (to interact with Users table)
const User = require("../models/user.model");

// Import bcrypt for password hashing
const bcrypt = require("bcryptjs");

// Import JWT
const jwt = require("jsonwebtoken");

// Register new user
exports.registerUser = async (req, res) => {
  try {
    // Get data from request body
    const { name, email, password, role } = req.body;

    // Check if user with same email already exists
    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user in database
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: role || "Viewer", // default role if not provided
    });

    // Send success response
    res.status(201).json({
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    // Handle any server errors
    res.status(500).json({
      message: error.message,
    });
  }
};

// ---------------- LOGIN ----------------
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check user exists
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    // Generate token
    const token = jwt.sign(
      {
        id: user.id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      },
    );

    res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
