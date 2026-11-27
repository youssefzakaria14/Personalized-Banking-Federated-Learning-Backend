
const { PrismaPg } = require("@prisma/adapter-pg");
const { PrismaClient } = require("@prisma/client");

const connectionString = process.env.DATABASE_URL;

const adapter = new PrismaPg({
  connectionString,
  max: 2,
  connectionTimeoutMillis: 20000,
  idleTimeoutMillis: 10000,
});

const prisma = new PrismaClient({
  adapter,
});

module.exports = prisma;
