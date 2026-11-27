
const express = require('express');
const AuthController = require('./auth.controller');
const { validateLogin } = require('./auth.validation');

const router = express.Router();

router.post(
  '/customer/login',
  validateLogin,
  AuthController.login
);

module.exports = router;
