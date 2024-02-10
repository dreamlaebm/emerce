import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const productData: Prisma.ProductCreateInput[] = [{
      name: "batata doce",
      description: "Uma batata doce.",
      imageURL:
        "https://midia.gruposinos.com.br/_midias/jpg/2023/08/04/800x500/1_batata_doce__1_-21114581.jpeg?ims=1200x/filters:quality(70)",
      price: 2.0,
}] 

async function main() {
    console.log(`Start seeding ...`)
    for (const data of productData) {
      const user = await prisma.product.create({
        data
      })
      console.log(`Created product with id: ${user.id}`)
    }
    console.log(`Seeding finished.`)
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