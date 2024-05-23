'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useMainCtx } from "@/context/main";
import axios from "axios";
import { signIn } from "next-auth/react";
import { toast, Toaster } from "sonner";
import { useRouter } from "next/navigation";

export default function Login() {

  const { mainData, onChangeMainData, isLoading, checkAuth } = useMainCtx()
  const router = useRouter()
  const [data, setData] = useState({})

  useEffect(() => {
    checkAuth()
  }, [])

  function set(obj = {}) {
    setData((prev) => {
      return {...prev, ...obj}
    })
  }

  const handleChange = (e) => {
    set({[e.target.name]: e.target.value})
  }

  async function onLogin() {
    try {
      const body = {
        username: data.username,
        password: data.password,
      };
      const result = await axios.post("/api/login", body).then((res) => res.data);

      if (result.status === 200) {
        const session = await signIn("credentials", { redirect: false });
        if (session.status === 200) {
          toast.success(result.message);
          mainData.isAuth = true;
          onChangeMainData();
          onClose();
        }
      } else toast.error(result.message);
    } catch (error) {
      toast.error(error.message);
    }
  }

  if(isLoading) {
    return <div className="fixed w-full h-full bg-[#212729] flex items-center justify-center">
      LOADING
    </div>
  } else {
    if(!mainData.isAuth) {
      return (
        <div className="h-screen flex items-center justify-center bg-[#101010] text-white">
          <div
            style={{
              backgroundImage: `url("login_bg.jpg")`,
            }}
            className="w-[746px] h-[915px] flex flex-col items-center"
          >
            <div className="w-full flex justify-center">
              <Image src="/bbroi_logo.png" alt="logo" width={318} height={175} />
            </div>
            <div className="text-4xl mb-[65px]">ADMIN PANEL</div>
            <div className="w-[344px] flex flex-col items-center">
              <div className="relative h-[45px] w-full mb-[30px]">
                <img
                  alt="username"
                  src="/icons/user.png"
                  className="h-4 w-4 absolute top-0 bottom-0 my-auto left-3"
                />
                <Input
                  id="username"
                  name="username"
                  type="username"
                  placeholder="USERNAME"
                  className="w-full h-[45px] bg-[#09080E] text-white placeholder:text-white pl-9 border-none"
                  value={data?.username}
                  onChange={handleChange}
                />
              </div>
              <div className="relative h-[45px] w-full mb-[40px]">
                <img
                  alt="password"
                  src="/icons/password.png"
                  className="h-4 w-4 absolute top-0 bottom-0 my-auto left-3"
                />
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="PASSWORD"
                  className="w-full h-[45px] bg-[#09080E] text-white placeholder:text-white pl-9 border-none"
                  value={data?.password}
                  onChange={handleChange}
                />
              </div>
              <Button className="w-[163px] h-[45px] bg-[#09080E] rounded-[5px]" onClick={() => { onLogin() }}>
                LOGIN
              </Button>
            </div>
          </div>
        </div>
      );
    } else {
      return router.push('/profit')
    }
  }
}
