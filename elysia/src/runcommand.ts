import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function createUser() {
  const plainPassword = '123456';
  const hashedPassword = await bcrypt.hash(plainPassword, 10); // 🔒 hash password ด้วย bcrypt

  const newUser = await prisma.user.create({
    data: {
      id: uuidv4(),
      phone: '0959293196',
      password: hashedPassword,
    },
  });

  console.log('✅ User created:', {
    id: newUser.id,
    phone: newUser.phone,
    password: newUser.password, // hashed
  });
}

createUser()
  .catch((e) => {
    console.error('❌ Error creating user:', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
