"use server"

import prisma from "@/lib/prisma";
import { Prisma, Product } from "@prisma/client";

export async function getProducts() {

  return await prisma.product.findMany();
}

export async function findProductById(id: number) {
  return await prisma.product.findUnique({
    where: {
      id
    },
  })
}


export async function createProduct(product: Prisma.ProductCreateInput){
  return await prisma.product.create({data: product})
}