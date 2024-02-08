"use client";

import Page from "@/app/layout/Page";
import { useState } from "react";
import uuid from "uuid4";
import { useGlobal } from "@/app/global";
import { useRouter } from "next/navigation";

export default function CreateProductForm() {
  const addProduct = useGlobal((state) => state.addProduct);
  const { push } = useRouter();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const submit = (e: any) => {
    e.preventDefault();
    let id = uuid() + name.replaceAll(" ", "-");

    addProduct(id, {
      name: name,
      description: description,
      imageURL: image,
      price: price,
    });

    push(`/product/${id}`);
  };
  return (
    <Page>
      <form onSubmit={submit} className="h-full w-full justify-center">
        <div className="flex flex-1 flex-col h-full gap-4 bg-commerce-blue p-4 ">
          <img src={image} className="w-2/12 self-center rounded-full" alt="" />
          <input
            id="product_create_name"
            type="text"
            className="p-4 rounded-xl bg-commerce-black text-lg"
            placeholder="your product name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <textarea
            id="product_create_description"
            rows={4}
            className="p-4 rounded-xl bg-commerce-black text-lg"
            placeholder="your product description"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
          <input
            id="product_create_image_url"
            type="text"
            className="p-4 rounded-xl bg-commerce-black text-lg"
            placeholder="the url of the image of your product"
            value={image}
            onChange={(event) => {
              setImage(event.target.value);
            }}
          />
          <input
            id="product_create_price"
            type="number"
            className="p-4 rounded-xl bg-commerce-black text-lg"
            placeholder="the price of your product"
            value={price}
            onChange={(event) => {
              setPrice(Number.parseFloat(event.target.value));
            }}
          />
          <button
            type="submit"
            className="bg-commerce-black mt-8 w-9/12 md:w-1/2 hover:-translate-y-1 hover:scale-110 hover:bg-commerce-green hover:text-black duration-300 p-6 rounded-full self-center"
          >
            Create product
          </button>
        </div>
      </form>
    </Page>
  );
}
