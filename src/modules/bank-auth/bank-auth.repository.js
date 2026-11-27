
const prisma = require('../../config/prisma');

const findBankByEmail = async (email) => {
  const banks = [
    { name: 'CIB', table: prisma.bANK1_CIB },
    { name: 'NBE', table: prisma.bANK2_NATURAL_BANK_OF_EGYPT },
    { name: 'MISR', table: prisma.bANK3_MISR_BANK },
    { name: 'CAIRO', table: prisma.bANK4_CAIRO_BANK },
  ];

  for (const bank of banks) {
    const bankAccount = await bank.table.findUnique({
      where: { email },
    });

    if (bankAccount) {
      return {
        bankAccount,
        bank: bank.name,
      };
    }
  }

  return null;
};

module.exports = { findBankByEmail };
