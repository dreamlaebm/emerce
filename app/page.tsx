"use client";

import Image from "next/image";
import HeaderBar from "./components/HeaderBar";
import { useEffect, useState } from "react";
import { useGlobal } from "./global";
import Options from "./components/Options";
import Page from "./layout/Page";
import ProductFeed from "./product/feed";
import { productInfo } from "./abc/Product";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";

export default function Home() {
  const { getPage, products } = useGlobal();

  const [feedPageIndex, setFeedPageIndex] = useState(0);
  const [feedPage, setFeedPage] = useState(Array<productInfo>);

  useEffect(() => {
    setFeedPage(getPage(feedPageIndex));
  }, []);

  return (
    <Page>
      <ProductFeed products={feedPage} />
      <div className="flex md:hidden flex-1 self-end gap-16 justify-center">
        <button
          onClick={() => {
            setFeedPageIndex(feedPageIndex - 1);
            console.log(products.length / 10);
            console.log(feedPageIndex);
            console.log(feedPage);
            console.log(feedPage.length);
          }}
        >
          <ArrowLeftCircleIcon fill="white" stroke="white" width={48} />
        </button>
        <button
          onClick={() => {
            setFeedPageIndex(feedPageIndex + 1);
            console.log(products.length / 10);
            console.log(feedPageIndex);
            console.log(feedPage);
            console.log(feedPage.length);
          }}
        >
          <ArrowRightCircleIcon fill="white" stroke="white" width={48} />
        </button>
      </div>
    </Page>
  );
}
