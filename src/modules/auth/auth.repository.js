
const prisma = require('../../config/prisma');

const findCustomerByEmail = async (email) => {
  const banks = [
    { name: 'CIB', table: prisma.cUSTOMER },
    { name: 'NBE', table: prisma.nBE_CUSTOMER },
    { name: 'MISR', table: prisma.mISR_CUSTOMER },
    { name: 'CAIRO', table: prisma.cB_CUSTOMER },
  ];

  for (const bank of banks) {
    const customer = await bank.table.findUnique({
      where: { email },
    });

    if (customer) {
      return {
        customer,
        bank: bank.name,
      };
    }
  }

  return null;
};

module.exports = {
  findCustomerByEmail,
};
