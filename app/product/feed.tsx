import { useEffect, useState } from "react";
import Product from "../abc/Product";
import { useGlobal } from "@/app/global";
import Link from "next/link";

function ProductDisplayFeed({ product }: { product: Product }) {
  return (
    <div className="flex flex-col p-4 bg-commerce-blue">
      <img src={product.imageURL} alt="" />
      <p>{product.name}</p>
    </div>
  );
}

interface productInfo {
  id: string;
  product: Product;
}

export default function ProductFeed({ page }: { page: number }) {
  const { getPage } = useGlobal();
  const [pageInfo, setPageInfo] = useState<Array<productInfo>>([]);

  useEffect(() => {
    setPageInfo(getPage(page));
  }, []);

  return (
    <>
      <div className="grid overflow-y-auto no-scrollbar::-webkit-scrollbar no-scrollbar grid-cols-1 gap-4 justify-center">
        {pageInfo.map((info) => {
          return (
            <Link href={`/product/${info.id}`}>
              <ProductDisplayFeed product={info.product} />
            </Link>
          );
        })}
      </div>
    </>
  );
}
