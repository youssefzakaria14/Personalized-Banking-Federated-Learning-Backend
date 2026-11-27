
const authService = require('./auth.service');
const asyncHandler = require('../../middlewares/asyncHandler');

class AuthController {
  static login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const result = await authService.login(email, password);

    return res.status(200).json({
      message: 'Login successfully',
      success: true,
      data: result,
    });
  });
}

module.exports = AuthController;
