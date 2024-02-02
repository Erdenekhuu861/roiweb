"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const menus = [
  { name: "Profit", link: "/profit" },
  { name: "Agents", link: "/agents" },
  { name: "Managers", link: "/managers" },
  { name: "Players", link: "/players" },
  { name: "Controlling Balance", link: "/controlling-balance" },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="w-56 bg-[#1C1C1C] h-full text-white">
      <div className="py-[52px] pl-[32px] w-full flex flex-col gap-[26px]">
        {menus.map((x, i) => (
          <Link
            href={x.link}
            key={i * 123}
            className={`cursor-pointer ${
              pathname === x.link
                ? "text-[#2F80ED] text-xl font-bold"
                : "text-[15px] text-white font-semibold"
            }`}
          >
            {x.name}
          </Link>
        ))}
      </div>
      <div className="w-full flex justify-center">
        <img alt="wallet" src="/wallet.png" className="w-[110px] h-[110px]" />
      </div>
      <div className="h-[2px] bg-white w-full" />
      <div className="w-full flex justify-center">
        <img
          alt="wallet"
          src="/create_host.png"
          className="w-[150px] h-[150px]"
        />
      </div>
    </div>
  );
}
