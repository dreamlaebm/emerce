import { PropsWithChildren, useState } from "react";
import HeaderBar from "../components/HeaderBar";
import Options from "../components/Options";

export default function Page({ children }: PropsWithChildren<{}>) {
  const [isOptionsExpanded, setOptionsExpanded] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-2 gap-y-0 h-screen">
        <HeaderBar
          setter={setOptionsExpanded}
          value={isOptionsExpanded}
        ></HeaderBar>
        <div className="flex-1 h-full md:flex">
          {isOptionsExpanded ? <Options /> : ""}
          {children}
        </div>
      </div>
    </>
  );
}
