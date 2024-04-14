Following commands for this prisma database:
----------------------------------------------------------------------------------------------------------------------------------------------------------------
1. Create TypeScript project and set up Prisma ORM:

mkdir hello-prisma
cd hello-prisma

npm init -y
npm install typescript ts-node @types/node --save-dev

npx tsc --init

npm install prisma --save-dev

npx prisma init --datasource-provider sqlite

----------------------------------------------------------------------------------------------------------------------------------------------------------------
2. Model your data in the Prisma schema:

model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
}

model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String?
  published Boolean @default(false)
  author    User    @relation(fields: [authorId], references: [id])
  authorId  Int
}

----------------------------------------------------------------------------------------------------------------------------------------------------------------
3. Run a migration to create your database tables with Prisma Migrate:

npx prisma migrate dev --name init

----------------------------------------------------------------------------------------------------------------------------------------------------------------
4. Explore how to send queries to your database with Prisma Client:

Create a new file called script.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

----------------------------------------------------------------------------------------------------------------------------------------------------------------
5. Next steps:

npx prisma studio