import React from "react";

export default function ControllingBalance() {
  return (
    <div className="w-full h-full text-white">
      <div className="flex items-center gap-4 mb-5">
        <div className="flex items-center justify-between h-7 px-3 w-[160px] border border-white rounded-[5px]">
          Search <img src="/icons/search.png" height={20} width={20} />
        </div>
        <div>Flags</div>
      </div>
      <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-5">
        {[{}, {}, {}, {}, {}, {}].map((x, i) => (
          <div key={i * 123} className="flex bg-[#1C1C1C] py-3 px-5 w-full rounded">
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
                <div className="text-[#E2B93B]">BBROI fee - 1520$</div>
                <div className="text-[#A23BE2]">Agent Name : BB Agent</div>
                <div className="text-[#A23BE2]">Agent fee - 540$</div>
                <div>Manager Name : Inci Manager</div>
                <div>Managert fee - 120$</div>
              </div>
            </div>
            <div className="w-[40%] pl-5 flex flex-col gap-5">
              <div className="bg-[#CEDEF3] rounded-[15px] w-full px-3 py-5 flex items-center">
                <div className="w-[50%] flex flex-col gap-2 items-center">
                  <div className="text-[#494952] text-xs">Wallet balance</div>
                  <div className="font-bold text-black">5000$</div>
                </div>
                <div className="w-[50%] flex justify-center">
                  <div className="font-bold w-fit bg-[#2F80ED] text-sm rounded-[35px] py-1 px-2">
                    Transfer
                  </div>
                </div>
              </div>
              <div>
                <div className="w-full flex justify-between items-center">
                  <div className="text-[10px] font-bold">
                    Recent Transactions
                  </div>
                  <div className="text-[#6D6A6D] text-[8px]">View All</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <img src="/icons/down_rate.png" height={15} width={15} />
                    <div className="flex items-center">
                      <div className="text-[8px] font-medium">
                        Withdrawal to BBRO@checking.com
                      </div>
                      <div className="text-[#6D6A6D] text-[8px] font-medium">
                        Success
                      </div>
                    </div>
                    <div className="text-[#AC1818] text-[8px] font-medium">
                      - 4550$
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src="/icons/up_rate.png" height={15} width={15} />
                    <div className="flex items-center">
                      <div className="text-[8px] font-medium">
                        Account Funded
                      </div>
                      <div className="text-[#6D6A6D] text-[8px] font-medium">
                        Success
                      </div>
                    </div>
                    <div className="text-[#27AE60] text-[8px] font-medium">
                      - 250$
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
