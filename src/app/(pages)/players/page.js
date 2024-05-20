'use client'
import React, { useEffect, useState } from "react";

export default function Players() {

  const [state, setState] = useState()

  useEffect(() => {
        
  }, [])

  return (
    <div className="w-full h-full text-white">
      <div className="flex items-center gap-4 mb-5">
        <div className="flex items-center justify-between h-7 px-3 w-[160px] border border-white rounded-[5px]">
          Search <img src="/icons/search.png" height={20} width={20} />
        </div>
        <div>Flags</div>
      </div>
      <div className="flex w-full flex-wrap gap-5 bg-[#212121] p-2 rounded">
        <div className="flex w-full h-fit">
          <table className="table-fixed w-full text-sm">
            <colgroup>
              <col width={`20%`}/>
              <col width={`15%`}/>
              <col width={`10%`}/>
              <col width={`10%`}/>
              <col width={`20%`}/>
              <col width={`10%`}/>
              <col width={`10%`}/>
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
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3">username</td>
                <td className="py-3 text-center">#1231231</td>
                <td className="py-3 text-center">
                  <div className="bg-emerald-200 text-emerald-600 px-3 rounded-lg text-center">
                    online
                  </div>
                </td>
                <td className="py-3 text-center">control</td>
                <td className="py-3 text-right">25000$</td>
                <td className="py-3 text-center">100ms</td>
                <td className="py-3 text-center">23/04/22</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* {[{}].map((x, i) => (
          <div key={i * 123} className="flex bg-[#1C1C1C] py-3 px-5 w-[49%]">
            <div className="w-[60%] border-r border-white pr-5">
              <div className="flex gap-8 items-center mb-3">
                <div className="bg-[#EB5757] w-[80px] h-[80px] rounded-full"></div>
                <div className="border-r border-white pr-8">
                  <div className="text-xs">Follow</div>
                  <div className="text-xl font-bold">150</div>
                </div>
                <div>
                  <div className="text-xs">Followers</div>
                  <div className="text-xl font-bold">350</div>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div className="text-xl font-bold">Calven Cooper</div>
                <img src="/icons/mgl_flag.png" height={20} width={20} />
              </div>
              <div className="flex flex-col gap-1">
                <div>Phone number : +976 94356652</div>
                <div>Email : Cal@gmail.com</div>
                <div>Home : Lekki, 2 Street, 26</div>
                <div className="text-[#27AE60]">Balanced : 5000$</div>
              </div>
            </div>
            <div className="w-[40%] pl-5 flex flex-col gap-5">
              <div className="text-[#2D6413]">Fee Breakdown</div>
              <div className="text-[#E2B93B]">BBROI fee - 1520$</div>
              <div className="flex flex-col gap-1 text-[#A23BE2]">
                <div>Agent Name : BB Agent</div>
                <div>Agent fee - 540$</div>
              </div>
              <div className="flex flex-col gap-1">
                <div>Manager Name : Inci Manager</div>
                <div>Managert fee - 120$</div>
              </div>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
}
