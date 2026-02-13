import { PrismaClient } from "../generated/prisma/index.js";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const [, , username, password] = process.argv;

  if (!username || !password) {
    console.error("Usage: npm run admin:bootstrap -- <username> <password>");
    process.exit(1);
  }

  const passwordHash = await bcrypt.hash(password, 12);

  const user = await prisma.user.upsert({
    where: { username },
    update: {
      passwordHash,
      role: "SUPER_ADMIN",
      isActive: true,
    },
    create: {
      username,
      passwordHash,
      role: "SUPER_ADMIN",
      isActive: true,
      name: username,
    },
  });

  console.log(`SUPER_ADMIN ready: ${user.username} (${user.id})`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

