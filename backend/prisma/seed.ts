import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const alice = await prisma.user.upsert({
    where: { email: 'alice@prisma.io' },
    update: {},
    create: {
      email: 'boid@netlight.com',
      name: 'Boidy McBoidface',
      avatarUrl: "https://avatars.slack-edge.com/2016-05-27/46299803760_be53d115d38f81fa0a33_102.jpg",
      authoredTodos: {
        create: [
          {
            title: "Buy milk",
            done: false
          },
          {
            title: "Write feedback",
            done: false
          },
          {
            title: "Be awesome",
            done: true
          }
        ]
      }
    },
  })
  const bob = await prisma.user.upsert({
    where: { email: 'bob@prisma.io' },
    update: {},
    create: {
      email: 'bob@prisma.io',
      name: 'Bob',
    },
  })
  console.log({ alice, bob })
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
