import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { formatPrice } from "../utils/price";
import { Product } from "@prisma/client";
import { getProducts } from "../actions";
import { transformAsync, useAsyncEffect, useFuture } from "../utils/asyncer";



function ProductDisplayFeed({ product, id }: { product: Product; id: number }) {
  return (
    <div className="flex flex-col gap-4 p-4 rounded-xl w-full bg-white justify-between items-center">
      <img src={product.imageURL} alt="" className="aspect-square w-full" />
      <p className="text-black font-medium text-lg text-nowrap">
        {product.name}
      </p>
      <p className="text-black font-medium text-lg">
        {formatPrice(product.price)}
      </p>
      <button
        className="bg-commerce-blue p-2 rounded-xl w-full md:w-5/6

     hover:transition-transform
     hover:scale-110
     hover:duration-500
     duration-500
     hover:bg-commerce-green
   "
      >
        <p className="text-white font-bold text-lg ">Buy</p>
      </button>
      <button
        onClick={() => {
          //  TODO: Remove product
        }}
        className="bg-commerce-red p-2 rounded-xl w-full md:w-5/6

hover:transition-transform
hover:scale-110
hover:duration-500
duration-500"
      >
        <p className="text-white font-bold text-lg">Delete product</p>
      </button>
    </div>
  );
}



export default async function ProductFeed() {
  const products = useFuture(getProducts);

  return products ? (
    <div
      className="p-4 grid overflow-y-auto md:w-full no-scrollbar::-webkit-scrollbar no-scrollbar grid-cols-1 md:grid-cols-3
    lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 justify-center"
    >
      {products?.map((info) => {
        return (
          <Link href={`/product/${info.id}`}>
            <ProductDisplayFeed product={info} id={info.id} />
          </Link>
        );
      })}
    </div>): null
  
}
