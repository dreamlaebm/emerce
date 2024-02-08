// ja shareou a porta? oi, ja
"use client";

import { useState } from "react";

export default function HeaderBar({
  setter,
  value,
}: {
  setter: (b: boolean) => void;
  value: boolean;
}) {
  return (
    <>
      <div className="flex justify-between gap-8 md:gap-16 p-4 w-full h-16 bg-commerce-blue">
        <button
          className="flex items-center justify-center"
          onClick={() => {
            setter(!value);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <div className={`flex flex-1 justify-center md:justify-end`}>
          <input
            type="text"
            className="w-10/12 text-whtie bg-slate-800 px-2"
            placeholder="search here"
          />

          <div className="w-2/12 max-w-16 bg-slate-900 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
