import React from "react";
import Header from "./@components/Header";
import Sidebar from "./@components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="h-screen w-screen">
      <Header />
      <div style={{ height: "calc(100% - 50px)" }} className="flex">
        <Sidebar />
        <div
          style={{ width: "calc(100% - 14rem)" }}
          className="h-full overflow-auto bg-[#101010] px-16 py-6"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
