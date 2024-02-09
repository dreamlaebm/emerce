import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import type {} from "@redux-devtools/extension"; // required for devtools typing
import Product from "./abc/Product";
import { useEffect } from "react";
import { Chunk } from "./utils/chunk";

interface GlobalState {
  products: [
    {
      id: string;
      product: Product;
    }
  ];
  addProduct: (id: string, product: Product) => void;
  getProduct: (id: string) => Product | null;
  getPage: (page: number) => Array<{ id: string; product: Product }>;
}

// ah sabe pq eu acho que nao ta indo?
// pq provavelmente o estado reseta toda vez que o next dá rebuild
// dx eu resolver isso
//ta indo
// o estado reseta, sim
// so q eu tava redirecionando errado
//ai fode o bgl tlgd?

const DEFAULT_PRODUCTS: [
  {
    id: string;
    product: Product;
  }
] = [
  {
    id: "test",
    product: {
      name: "batata doce",
      description: "let i be your uma",
      imageURL: "",
      price: 2.0,
    },
  },
];

const globalPersist = persist<GlobalState>(
  (set, get) => ({
    products: DEFAULT_PRODUCTS,
    addProduct: (id, product) =>
      set((state) => {
        state.products.push({
          id: id,
          product: product,
        });
        return { products: state.products };
      }),
    getProduct: (id) => {
      let product_found = get().products.filter((x) => x.id == id);
      if (product_found.length <= 0) {
        return null;
      }
      return product_found[0].product;
    },
    getPage: (page) => {
      let pages = Chunk(get().products, 10);
      if (pages.length - 1 >= page) {
        return pages[page];
      }
      return [];
    },
  }),
  {
    name: "products",
    storage: createJSONStorage(() => sessionStorage),
  }
);

export const useGlobal = create<GlobalState>()(globalPersist);
