
const validateLogin = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: 'Email and password are required',
      success: false,
    });
  }

  if (!email.includes('@')) {
    return res.status(400).json({
      message: 'Invalid email',
      success: false,
    });
  }

  next();
};

module.exports = {
  validateLogin,
};
