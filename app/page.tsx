"use client";

import Image from "next/image";
import HeaderBar from "./components/HeaderBar";
import { Suspense, useEffect, useState } from "react";
import { useGlobal } from "./global";
import Options from "./components/Options";
import Page from "./layout/Page";
import ProductFeed from "./product/feed";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";
import prisma from "@/lib/prisma";
import { GetServerSideProps } from "next";
import { Product } from "@prisma/client";
import { getProducts } from "./actions";
import { useParams, useSearchParams } from "next/navigation";


export default async function Home() {
  const params = useSearchParams();
  const page = Number(params.get('page')) ?? 0
  
  return (
    <Page>
      <div>
      <Suspense fallback={<h2>Loading...</h2>}>
        <ProductFeed/>
      </Suspense>
      </div>

      <div className="flex md:hidden flex-1 self-end gap-16 justify-center">
        <button
          onClick={() => {
            // setFeedPageIndex(feedPageIndex - 1);
            // console.log(products.length / 10);
            // console.log(feedPageIndex);
            // console.log(feedPage);
            // console.log(feedPage.length);
          }}
        >
          <ArrowLeftCircleIcon fill="white" stroke="white" width={48} />
        </button>
        <button
          onClick={() => {
            // setFeedPageIndex(feedPageIndex + 1);
            // console.log(feedPageIndex);
            // console.log(feedPage);
            // console.log(feedPage.length);
          }}
        >
          <ArrowRightCircleIcon fill="white" stroke="white" width={48} />
        </button>
      </div>
    </Page>
  );
}
