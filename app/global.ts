import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import type {} from "@redux-devtools/extension"; // required for devtools typing
import { useEffect } from "react";
import { Chunk } from "./utils/chunk";

// Carrinho

interface GlobalState {

}


const globalPersist = persist<GlobalState>(
  (set, get) => ({
  }),
  {
    name: "products",
    storage: createJSONStorage(() => localStorage),
  }
);

export const useGlobal = create<GlobalState>()(globalPersist);
