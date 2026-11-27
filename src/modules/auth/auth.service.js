
const authRepository = require('./auth.repository');
const { comparePassword } = require('../../utils/hashPassword');
const ApiError = require('../../utils/ApiError');
const generateToken = require('../../utils/generateToken');

const login = async (email, password) => {
  const result = await authRepository.findCustomerByEmail(email);

  if (!result) {
    throw new ApiError(401, 'Invalid email or password');
  }

  const { customer, bank } = result;

  const isPasswordCorrect = await comparePassword(
    password,
    customer.password
  );

  if (!isPasswordCorrect) {
    throw new ApiError(401, 'Invalid email or password');
  }

  const token = generateToken({
    id: customer.id,
    email: customer.email,
    bank: bank,
  });

  return {
    token,
    customer: {
      id: customer.id,
      name: customer.name,
      email: customer.email,
      bank: bank,
    },
  };
};

module.exports = {
  login,
};
