import React from "react";

export default function Header() {
  return (
    <div className="w-screen bg-[#29292F] h-[50px] px-14 text-white flex items-center">
      <div className="w-full flex justify-between items-center">
        <div>
          <div className="text-xs">Accounting Dashboard</div>
          <div className="text-[8px]">2023, Sep 16, 14:44</div>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-5 h-5 rounded-full bg-[#E2B93B]"></div>
          <div className="text-xs">ADMIN NAME</div>
        </div>
      </div>
    </div>
  );
}
