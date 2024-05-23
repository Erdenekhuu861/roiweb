"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const menus = [
  { name: "Profit", link: "/profit" },
  { name: "Agents", link: "/agents" },
  { name: "Agent list", link: "/agents/list" },
  { name: "Managers", link: "/managers" },
  { name: "Manager list", link: "/managers/list" },
  { name: "Players", link: "/players" },
  // { name: "Controlling Balance", link: "/controlling-balance" },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="w-[300px] min-w-[300px] bg-[#1C1C1C] h-full text-white">
      <div className="py-10 px-5 w-full flex flex-col gap-1">
        {menus.map((x, i) => (
          <Link
            href={x.link}
            key={i * 123}
            className={`cursor-pointer px-4 py-2 hover:bg-[#212729] rounded transition-all ${
              pathname === x.link
                ? "text-[#d3d3d3] bg-[#111719] bg-opacity-50 text-lg font-bold"
                : "text-lg text-white font-semibold"
            }`}
          >
            {x.name}
          </Link>
        ))}
      </div>
      <Link href={'/cashier'} className="w-full flex justify-center ">
        <img alt="wallet" src="/wallet.png" className="w-[110px] h-[110px]" />
      </Link>
      <div className="h-[2px] bg-white w-full" />
      <Link href={'/create-host'} className="w-full flex justify-center">
        <img
          alt="wallet"
          src="/create_host.png"
          className="w-[150px] h-[150px]"
        />
      </Link>
    </div>
  );
}
