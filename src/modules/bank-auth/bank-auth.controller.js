
const bankAuthService = require('./bank-auth.service');
const asyncHandler = require('../../middlewares/asyncHandler');

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const result = await bankAuthService.login(email, password);

  res.status(200).json({
    success: true,
    message: 'Bank login successful',
    data: result,
  });
});

module.exports = { login };
