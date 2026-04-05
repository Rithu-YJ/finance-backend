// Middleware to check user role
const checkRole = (allowedRoles) => {
  return (req, res, next) => {
    try {
      const userRole = req.user.role;

      // Check if user's role is allowed
      if (!allowedRoles.includes(userRole)) {
        return res.status(403).json({
          message: "Access denied",
        });
      }

      next();
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };
};

module.exports = checkRole;
