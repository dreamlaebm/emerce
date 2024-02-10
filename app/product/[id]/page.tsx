"use client";

import { useGlobal } from "@/app/global";
import Page from "@/app/layout/Page";
import prisma from "@/lib/prisma";
import { Product } from "@prisma/client";
import { GetServerSideProps } from "next";
import { useParams, useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { useAsyncEffect } from "../../utils/asyncer";
import { findProductById } from "../../actions";
import ProductView from "./ProductView";


function ProductNotFound() {
  return <h1> Produto não encontrado. </h1>;
}

export default async function Product() {
  const { id } = useParams<{ id: string }>();


  return (
    <Page>
      <Suspense fallback={<h2> Loading... </h2>}>
        <ProductView id={Number(id)} />
      </Suspense>
    </Page>
  );
}
