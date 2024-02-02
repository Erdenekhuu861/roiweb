"use client";

import React, { useState } from "react";

import NetProfit from "./@components/NetProfit";
import SalesIncome from "./@components/SalesIncome";
import Expense from "./@components/Expense";
import OtherCost from "./@components/OtherCost";

const tabs = ["Net Profit", "Sales income", "Expense", "Other cost"];

export default function Profit() {
  const [selectedTab, setSelectedTab] = useState("Net Profit");

  function onChangeTab() {
    switch (selectedTab) {
      case "Net Profit":
        return <NetProfit />;
      case "Sales income":
        return <SalesIncome />;
      case "Expense":
        return <Expense />;
      case "Other cost":
        return <OtherCost />;
      default:
        return <NetProfit />;
    }
  }

  return (
    <div className="w-full h-full text-white">
      <div className="flex gap-[30px]">
        {tabs.map((x, i) => (
          <div
            key={i * 123}
            className={`h-[35px] w-[165px] flex justify-center items-center cursor-pointer ${
              selectedTab === x ? "bg-[#27AE60]" : "bg-[#1C1C1C]"
            }`}
            onClick={() => setSelectedTab(x)}
          >
            {x}
          </div>
        ))}
      </div>
      {onChangeTab()}
    </div>
  );
}
