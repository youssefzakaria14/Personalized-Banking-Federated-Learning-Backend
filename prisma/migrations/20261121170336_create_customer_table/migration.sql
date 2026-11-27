-- CreateTable
CREATE TABLE "customers" (
    "customer_id" TEXT NOT NULL,
    "bank_id" INTEGER NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" TEXT NOT NULL,
    "monthly_income" DOUBLE PRECISION NOT NULL,
    "employment_status" TEXT NOT NULL,
    "occupation" TEXT NOT NULL,
    "education" TEXT NOT NULL,
    "marital_status" TEXT NOT NULL,
    "monthly_expenses" DOUBLE PRECISION NOT NULL,
    "savings" DOUBLE PRECISION NOT NULL,
    "existing_debt" DOUBLE PRECISION NOT NULL,
    "city" TEXT NOT NULL,
    "customer_since" DATE NOT NULL,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("customer_id")
);
