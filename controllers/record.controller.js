const Record = require("../models/record.model");
const { Op } = require("sequelize");

// Create new record (Admin only)
exports.createRecord = async (req, res) => {
  try {
    const { amount, type, category, date, notes } = req.body;

    //VALIDATION
    if (!amount || !type || !category) {
      return res.status(400).json({
        message: "Amount, type and category are required",
      });
    }

    if (type !== "income" && type !== "expense") {
      return res.status(400).json({
        message: "Type must be 'income' or 'expense'",
      });
    }

    const record = await Record.create({
      amount,
      type,
      category,
      date,
      notes,
      created_by: req.user.id, // from token
    });

    res.status(201).json({
      message: "Record created",
      record,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get all records
exports.getRecords = async (req, res) => {
  try {
    const { type, category, date } = req.query;

    let whereClause = {
      created_by: req.user.id, // show only user's data
    };

    // Apply filters
    if (type) {
      whereClause.type = type;
    }

    if (category) {
      whereClause.category = category;
    }

    if (date) {
      whereClause.date = date;
    }

    const records = await Record.findAll({
      where: whereClause,
    });

    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update record (Admin only)
exports.updateRecord = async (req, res) => {
  try {
    const { id } = req.params;

    const record = await Record.findByPk(id);

    if (!record) {
      return res.status(404).json({
        message: "Record not found",
      });
    }

    await record.update(req.body);

    res.json({
      message: "Record updated",
      record,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete record (Admin only)
exports.deleteRecord = async (req, res) => {
  try {
    const { id } = req.params;

    const record = await Record.findByPk(id);

    if (!record) {
      return res.status(404).json({
        message: "Record not found",
      });
    }

    await record.destroy();

    res.json({
      message: "Record deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Dashboard summary
exports.getDashboard = async (req, res) => {
  try {
    const records = await Record.findAll({
      where: {
        created_by: req.user.id,
      },
    });
    let totalIncome = 0;
    let totalExpense = 0;
    let categoryBreakdown = {};

    records.forEach((record) => {
      const amount = record.amount;

      // Income / Expense calculation
      if (record.type === "income") {
        totalIncome += amount;
      } else {
        totalExpense += amount;
      }

      // Category breakdown
      if (categoryBreakdown[record.category]) {
        categoryBreakdown[record.category] += amount;
      } else {
        categoryBreakdown[record.category] = amount;
      }
    });

    res.json({
      totalIncome,
      totalExpense,
      balance: totalIncome - totalExpense,
      categoryBreakdown,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
