import React from "react";
import { useMainCtx } from "@/context/main";
export default function Header() {

  const { mainData, logout } = useMainCtx()

  return (
    <div className="w-screen bg-[#29292F] h-[50px] px-14 text-white flex items-center">
      <div className="w-full flex justify-between items-center">
        <div>
          <div className="text-xs">Accounting Dashboard</div>
          <div className="text-[8px]">2023, Sep 16, 14:44</div>
        </div>
        <div className="flex flex-row h-fit gap-5 items-center">
          <div className="flex items-center gap-1">
            <div className="w-5 h-5 rounded-full bg-[#E2B93B]"></div>
            <div className="text-xs">ADMIN NAME</div>
          </div>
          <div>
            <div className="cursor-pointer" onClick={() => { logout() }}>
              <Logout />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Logout() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><path stroke-linejoin="round" d="M15 12H2m0 0l3.5-3M2 12l3.5 3"/><path d="M9.002 7c.012-2.175.109-3.353.877-4.121C10.758 2 12.172 2 15 2h1c2.829 0 4.243 0 5.122.879C22 3.757 22 5.172 22 8v8c0 2.828 0 4.243-.878 5.121c-.769.769-1.947.865-4.122.877M9.002 17c.012 2.175.109 3.353.877 4.121c.641.642 1.568.815 3.121.862"/></g></svg>
}