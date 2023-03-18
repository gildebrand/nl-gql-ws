import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const boid = await prisma.user.upsert({
    where: { email: 'boid@netlight.com' },
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
  const horsey = await prisma.user.upsert({
    where: { email: 'horsey@netlight.com' },
    update: {},
    create: {
      email: 'horsey@netlight.com',
      name: 'Horsey',
      avatarUrl: "https://www.netlight.com/wp-content/uploads/netlighthorse-320x320.jpg",
      authoredTodos: {
        create: [
          {
            title: "Enjoy some fresh hay and water after a long day of grazing",
            done: false,
          },
          {
            title: "Take a relaxing nap in the sun to recharge my energy",
            done: false,
          },
          {
            title: "Practice my trotting and cantering skills",
            done: false,
          },
          {
            title: "Explore new trails and surroundings to experience the world around me",
            done: false
          }
        ]
      }
    },
  })
  console.log({ boid, horsey });
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
