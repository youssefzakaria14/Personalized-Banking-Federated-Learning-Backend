
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./modules/auth/auth.routes');
const bankAuthRoutes = require('./modules/bank-auth/bank-auth.routes');
const adminAuthRoutes = require('./modules/admin-auth/admin-auth.routes');

const errorMiddleware = require('./middlewares/error.middleware');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/bank-auth', bankAuthRoutes);
app.use('/api/admin-auth', adminAuthRoutes);

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Personalized Banking API',
  });
});

app.use(errorMiddleware);

module.exports = app;
