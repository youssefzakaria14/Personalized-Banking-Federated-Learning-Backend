const adminAuthRepository = require('./admin-auth.repository');
const { comparePassword } = require('../../utils/hashPassword');
const ApiError = require('../../utils/ApiError');
const generateToken = require('../../utils/generateToken');

const login = async (email, password) => {
  const admin = await adminAuthRepository.findAdminByEmail(email);

  if (!admin) {
    throw new ApiError(401, 'Invalid email or password');
  }

  const isPasswordCorrect = await comparePassword(
    password,
    admin.password
  );

  if (!isPasswordCorrect) {
    throw new ApiError(401, 'Invalid email or password');
  }

  const token = generateToken({
    id: admin.id,
    email: admin.email,
    role: 'ADMIN',
  });

  return {
    id: admin.id,
    email: admin.email,
    role: 'ADMIN',
    token,
  };
};

module.exports = { login };
