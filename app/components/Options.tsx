import Link from "next/link";
import { PropsWithChildren, useState } from "react";
// oi vadia

interface OptionProp extends PropsWithChildren<{}> {
  name: string;
  sub: boolean;
}

function Option({ name, sub, children }: OptionProp) {
  const [isExtended, setExtended] = useState(false);
  return (
    <>
      <div className="flex flex-col w-full gap-2 items-center">
        <button
          onClick={() => {
            setExtended(!isExtended);
          }}
          className="w-full flex items-center justify-center"
        >
          <div
            className={`flex w-11/12 justify-center hover:bg-opacity-50 bg-commerce-black items-center px-10 md:px-0 md:w-full rounded-xl ${
              sub ? "p-1" : "p-4"
            }`}
          >
            <p>{name}</p>
          </div>
        </button>
        <div className="flex justify-center flex-col gap-2 md:self-end items-center w-10/12 md:justify-end md:items-end md:w-11/12 ">
          {isExtended ? children : <div></div>}
        </div>
      </div>
    </>
  );
}

export default function Options() {
  return (
    <>
      <div className="flex flex-col gap-2 md:w-2/12 lg:w-2/12 md:bg-commerce-blue md:h-full">
        <div className="p-4">
          <Option sub={false} name="Categories">
            <Link href="https://www.laebm.com" className="w-full">
              <Option sub={true} name="Websites"></Option>
            </Link>
          </Option>
          <Link href={"/product/create"}>
            <Option sub={false} name="Create product"></Option>
          </Link>
        </div>
      </div>
    </>
  );
}
