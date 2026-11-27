const adminAuthService = require('./admin-auth.service');
const asyncHandler = require('../../middlewares/asyncHandler');

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const result = await adminAuthService.login(email, password);

  res.status(200).json({
    success: true,
    message: 'Admin login successful',
    data: result,
  });
});

module.exports = { login };
