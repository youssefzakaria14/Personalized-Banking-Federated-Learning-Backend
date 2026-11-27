const ApiError = require('../../utils/ApiError');

const validateAdminLogin = (req, res, next) => {
  const { email, password } = req.body;

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!email || !password) {
    return next(new ApiError(400, 'Email and password are required'));
  }

  if (typeof email !== 'string' || !emailRegex.test(email.trim())) {
    return next(new ApiError(400, 'Please enter a valid email'));
  }

  if (typeof password !== 'string' || password.trim().length === 0) {
    return next(new ApiError(400, 'Password is required'));
  }

  req.body.email = email.trim().toLowerCase();
  next();
};

module.exports = validateAdminLogin;
