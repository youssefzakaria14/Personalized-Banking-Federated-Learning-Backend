
const bankAuthRepository = require('./bank-auth.repository');
const { comparePassword } = require('../../utils/hashPassword');
const ApiError = require('../../utils/ApiError');
const generateToken = require('../../utils/generateToken');

const login = async (email, password) => {

  const result = await bankAuthRepository.findBankByEmail(email);

  if (!result) {
    throw new ApiError(401, 'Invalid email or password');
  }

  const isPasswordCorrect = await comparePassword(
    password,
    result.bankAccount.password
  );

  if (!isPasswordCorrect) {
    throw new ApiError(401, 'Invalid email or password');
  }

  // Generate JWT token
  const token = generateToken({
    id: result.bankAccount.id,
    email: result.bankAccount.email,
    bank: result.bank,
    role: 'BANK',
  });

  return {
    id: result.bankAccount.id,
    name: result.bankAccount.name,
    email: result.bankAccount.email,
    bank: result.bank,
    token,
  };
};

module.exports = { login };
