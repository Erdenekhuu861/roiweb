'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";
import { useMainCtx } from "@/context/main";
import axios from "axios";
import { signIn } from "next-auth/react";
import { toast, Toaster } from "sonner";
import { useRouter } from "next/navigation";

export default function Login() {

  const { mainData, onChangeMainData } = useMainCtx()
  const router = useRouter()
  const [data, setData] = useState({})

  function set(obj = {}) {
    setData((prev) => {
      return {...prev, ...obj}
    })
  }

  const handleChange = (e) => {
    set({[e.target.name]: e.target.value})
  }

  console.log("router ==>", router)

  async function onLogin() {
    try {
      const param = { username: data.username, password: data.password }
      const res = await axios.post('/api/login', param).then((res) => res.data)

      console.log("login res", res)
      if(res.status === 200) {
        const session = await signIn('credentials', { redirect: false });
        if(session.status === 200) {
          toast.success(result.message)
          mainData.isAuth = true;
          router.push('/profit')
          onChangeMainData()
        } else {
          toast.error(result.message)
        }
      }
    } catch (e) {
      console.error('login error', e)
    }
  }

  console.log("mainData ==>", mainData)
    return <>
        { 
          mainData.isAuth ? router.push('/profit')
            : <div className="h-screen flex items-center justify-center bg-[#101010] text-white">
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
                      name='username'
                      onChange={handleChange}
                      placeholder="USERNAME"
                      className="w-full h-[45px] bg-[#09080E] text-white placeholder:text-white pl-9 border-none"
                    />
                  </div>
                  <div className="relative h-[45px] w-full mb-[40px]">
                    <img
                      alt="password"
                      src="/icons/password.png"
                      className="h-4 w-4 absolute top-0 bottom-0 my-auto left-3"
                    />
                    <Input
                      placeholder="PASSWORD"
                      name='password'
                      type='password'
                      onChange={handleChange}
                      className="w-full h-[45px] bg-[#09080E] text-white placeholder:text-white pl-9 border-none"
                    />
                  </div>
                  <Button className="w-[163px] h-[45px] bg-[#09080E] text-white hover:text-[#09080e] rounded-[5px]" onClick={() => {onLogin()}}>
                    LOGIN
                  </Button>
                </div>
              </div>
              <Toaster/>
            </div>
        }
    </>
}
