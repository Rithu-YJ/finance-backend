const express = require("express");
const router = express.Router();

const {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord,
  getDashboard,
} = require("../controllers/record.controller");

const verifyToken = require("../middleware/auth.middleware");
const checkRole = require("../middleware/role.middleware");

// Create record → ONLY ADMIN
router.post("/", verifyToken, checkRole(["Admin"]), createRecord);

// Get records → ADMIN + ANALYST
router.get("/", verifyToken, checkRole(["Admin", "Analyst"]), getRecords);

// Update record → ONLY ADMIN
router.put("/:id", verifyToken, checkRole(["Admin"]), updateRecord);

// Delete record → ONLY ADMIN
router.delete("/:id", verifyToken, checkRole(["Admin"]), deleteRecord);

// Dashboard → ALL USERS
router.get(
  "/dashboard",
  verifyToken,
  checkRole(["Admin", "Analyst", "Viewer"]),
  getDashboard,
);

module.exports = router;
