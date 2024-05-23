'use client'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";

export default function AgentList() {

  const [state, setState] = useState()

  useEffect(() => {
        
  }, [])

  return (
    <div className="w-full h-full text-white">
        <div className="flex flex-row w-full justify-between items-center">
            <div className="flex items-center gap-4 mb-5">
                <Input
                    id="username"
                    name="username"
                    type="username"
                    placeholder="Search..."
                    className="w-[250px] h-[45px] bg-[#09080E] text-white placeholder:text-white border-none"
                    autocomplete='off'
                    value={undefined}
                    onChange={(e) => {console.log(e.target.value)}}
                />
                <div>Flags</div>
            </div>
            <button className="bg-sky-600 text-white rounded px-5 py-2 h-fit">
                Add Agent
            </button>
        </div>
      <div className="flex w-full flex-wrap gap-5 bg-[#212121] p-2 rounded">
        <div className="flex w-full h-fit">
          <table className="table-fixed w-full text-sm">
            <colgroup>
              <col width={`20%`}/>
              <col width={`15%`}/>
              <col width={`10%`}/>
              <col width={`10%`}/>
              <col width={`10%`}/>
              <col width={`20%`}/>
              <col width={`10%`}/>
              <col width={50}/>
            </colgroup>
            <thead>
              <tr className="py-1">
                <th className="border-b border-b-[#414749]">USERNAME</th>
                <th className="border-b border-b-[#414749]">USER SER#</th>
                <th className="border-b border-b-[#414749]"></th>
                <th className="border-b border-b-[#414749]"></th>
                <th className="border-b border-b-[#414749]">AMOUNT</th>
                <th className="border-b border-b-[#414749]">SIGNAL</th>
                <th className="border-b border-b-[#414749]">SUBSCRIBE</th>
                <th className="border-b border-b-[#414749]"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3">username</td>
                <td className="py-3 text-center">#1231231</td>
                <td className="py-3 text-center">
                  <div className="flex w-full justify-center">
                    <div className="bg-emerald-200 w-full text-emerald-600 px-3 rounded-lg text-center">
                      online
                    </div>
                  </div>
                </td>
                <td className="py-3 text-center">
                <div className="flex w-full justify-center">
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <div className="bg-slate-800 text-white px-3 rounded-lg text-center cursor-pointer">
                          control
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className='bg-[#141414] text-[#e3e3e3]'>
                        <DropdownMenuItem className='cursoir-pointer'>Kick</DropdownMenuItem>
                        <DropdownMenuItem className='cursoir-pointer'>Freeze</DropdownMenuItem>
                        <DropdownMenuItem className='cursoir-pointer'>Ban</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </td>
                <td className="py-3 text-right">25000$</td>
                <td className="py-3 text-center">100ms</td>
                <td className="py-3 text-center">23/04/22</td>
                <td className="py-3 text-center">
                  <div className="cursor-pointer">
                    <Eye/>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function Eye() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="30px" viewBox="0 0 24 24">
    <g fill="none" stroke="currentColor" stroke-width="1.5">
      <path stroke-linecap="round" d="M9 4.46A9.84 9.84 0 0 1 12 4c4.182 0 7.028 2.5 8.725 4.704C21.575 9.81 22 10.361 22 12c0 1.64-.425 2.191-1.275 3.296C19.028 17.5 16.182 20 12 20c-4.182 0-7.028-2.5-8.725-4.704C2.425 14.192 2 13.639 2 12c0-1.64.425-2.191 1.275-3.296A14.465 14.465 0 0 1 5 6.821"/>
      <path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"/>
    </g>
  </svg>
}