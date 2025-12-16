import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Add a test log entry
  const log = await prisma.log.create({
    data: {
      title: "My First Dev Log",
      description: "Today I learned how to connect a database to my React app!",
      category: "Backend"
    }
  });

  console.log("Test log created:", log);
}

main()
  .catch((e) => {
    console.error("Error:", e);
  })
  .finally(() => prisma.$disconnect());