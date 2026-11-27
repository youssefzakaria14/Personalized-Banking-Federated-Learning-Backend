
const jwt = require('jsonwebtoken');

const adminMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({
      message: 'Token is required'
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== 'ADMIN') {
      return res.status(403).json({
        message: 'Admin only'
      });
    }

    next();

  } catch (error) {
    return res.status(401).json({
      message: 'Invalid token'
    });
  }
};

module.exports = adminMiddleware;
