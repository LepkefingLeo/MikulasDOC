import { PrismaClient } from '../generated/prisma/client'
import { faker } from '@faker-js/faker'
import dotenv from 'dotenv'

dotenv.config()

const prisma = new PrismaClient()

async function main() {
  const listOfMaterials = ['wood', 'metal', 'plastic', 'other']
  for (let i = 0; i < 10; i++) {
    const children = await prisma.children.create({
      data: {
        name: faker.person.firstName(),
        address: faker.location.country()+", "+faker.location.streetAddress(),
        country: faker.location.country(),
        wasGoodOrNot: faker.datatype.boolean(),
      },
    })
    for (let j = 0; j < 1; j++) {
      const toys = await prisma.toys.create({
        data: {
          name: faker.commerce.productName(),
          material: faker.helpers.arrayElement(listOfMaterials),
          weight: faker.number.float({ min: 0.1, max: 5.0, fractionDigits: 2 }), 
        },
      })
      
      await prisma.connection.create({
          data: {
            childId: children.id,
            toyId: toys.id,
          },
        })
      }
    }

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
