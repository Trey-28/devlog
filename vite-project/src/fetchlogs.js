import { PrismaClient } from "./generated/prisma/index.js";

const prisma = new PrismaClient();

async function main() {
  const logs = await prisma.log.findMany();
  console.log(logs);
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
