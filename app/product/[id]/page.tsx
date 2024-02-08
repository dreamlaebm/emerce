"use client";

import { useGlobal } from "@/app/global";
import Page from "@/app/layout/Page";
import { useParams, useRouter } from "next/navigation";

function ProductNotFound() {
  return <h1> Produto não encontrado. </h1>;
}

export default function Product() {
  const { id } = useParams<{ id: string }>();
  const { getProduct } = useGlobal();
  const { push } = useRouter();
  let product = getProduct(id);
  if (!product) {
    push("/");
  }

  return (
    <Page>
      <div className="w-full flex bg-commerce-black flex-1 h-full items-start justify-center">
        <div
          className="flex flex-col w-full p-8 gap-4 items-center bg-commerce-black md:gap-8
        
        md:w-8/12 md:rounded-xl  md:flex-row md:items-start"
        >
          <img
            className="rounded-xl w-full md:w-6/12 md:h-fit"
            src={
              product?.imageURL ??
              "data:image/png;base64,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"
            }
          />
          <div className="flex flex-col gap-4 w-full">
            <div className="flex gap-4 w-full">
              <div className="bg-commerce-blue p-4 flex justify-center rounded-xl w-7/12">
                {product?.name}
              </div>
              <div className="bg-commerce-blue flex justify-center rounded-xl w-5/12 items-center">
                {(() => {
                  if (product && product.price) {
                    // Render the price with the currency format
                    return `R$${product.price.toFixed(2)}`;
                  } else {
                    // Return a placeholder or handle the case where product or price is not available
                    return "Price not available";
                  }
                })()}
              </div>
            </div>
            {(() => {
              if (product && product.description.length > 0) {
                return (
                  <div className="flex gap-4 w-full bg-commerce-blue min-h-32 rounded-xl p-4">
                    <p>{product.description}</p>
                  </div>
                );
              }
            })()}
            <div className="flex md:flex-col w-full items-center gap-4 justify-center mt-6">
              <button className="w-2/6 md:w-full bg-commerce-blue rounded-xl p-4 hover:scale-110 transition-transform duration-200 hover:bg-commerce-green hover:text-black">
                Comprar
              </button>
              <button className="w-4/6 md:w-full bg-commerce-blue rounded-xl p-4 hover:scale-110 transition-transform duration-200 hover:bg-commerce-green hover:text-black">
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
