'use client'
import React, { useEffect } from "react";
import Header from "./@components/Header";
import Sidebar from "./@components/Sidebar";
import { useMainCtx } from "@/context/main";
import { useRouter } from "next/navigation";
export default function DashboardLayout({ children }) {
  const { isLoading, mainData, checkAuth } = useMainCtx()
  const router = useRouter()

  useEffect(() => {
    checkAuth()
  }, [])


  console.log("mainData.isAuth ===>", mainData.isAuth)

  if(isLoading) {
    return <div className="fixed w-full h-full bg-[#212729] flex items-center justify-center">
      LOADING
    </div>
  } else {
    if(mainData.isAuth) {
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
    } else {
      return router.push('/login')
    }
  }
}
