"use client";

import Image from "next/image";
import HeaderBar from "./components/HeaderBar";
import { useState } from "react";
import Options from "./components/Options";
import Page from "./layout/Page";
import ProductFeed from "./product/feed";

export default function Home() {
  return (
    <Page>
      <ProductFeed page={0} />
    </Page>
  );
}
