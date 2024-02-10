"use client"

import { DependencyList, Dispatch, SetStateAction, useEffect, useState } from "react";

export function useAsyncEffect(callback: () => Promise<void>, deps?: DependencyList) {
useEffect(() => {
async function caller() {
   callback() 
}
caller()
}, deps)
}

export async function  transformAsync<T>(getter: () => Promise<T>, setter: Dispatch<SetStateAction<T|null>>) {
   const result = await getter() 
   setter(result)
}

export function useFuture<T>(getter: () => Promise<T>): T|null {
   const [result, setResult] = useState<T|null>(null)

   useAsyncEffect(() => transformAsync(getter, setResult), [])

   return result;
}