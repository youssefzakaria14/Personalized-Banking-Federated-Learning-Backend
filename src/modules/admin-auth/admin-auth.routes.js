const express = require('express');

const router = express.Router();

const validateAdminLogin = require('./admin-auth.validation');
const adminAuthController = require('./admin-auth.controller');

router.post('/login', validateAdminLogin, adminAuthController.login);

module.exports = router;
