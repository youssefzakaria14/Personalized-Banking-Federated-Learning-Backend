
const express = require('express');

const router = express.Router();

const validateBankLogin = require('./bank-auth.validation');
const bankAuthController = require('./bank-auth.controller');

router.post(
  '/login',
  validateBankLogin,
  bankAuthController.login
);

module.exports = router;
