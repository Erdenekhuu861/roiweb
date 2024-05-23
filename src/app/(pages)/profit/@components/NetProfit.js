'use client'
import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
import { DropdownMenu, DropdownMenuItem, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function NetProfit() {
  const profitData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: [
          20.0, 10.1, 50.1, 30.6, 10.0, 20.0, 10.1, 50.0, 30.6, 10.0, 30.6,
          10.0,
        ],
        backgroundColor: "#6CB9AD",
      },
    ],
  };

  const profitOptions = {};

  const salesData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Match fee income",
        data: [
          20.0, 10.1, 50.1, 30.6, 10.0, 20.0, 10.1, 50.0, 30.6, 10.0, 30.6,
          10.0,
        ],
        backgroundColor: "#EDC161",
      },
      {
        label: "Transfer fee income",
        data: [
          20.0, 10.1, 50.1, 30.6, 10.0, 20.0, 10.1, 50.0, 30.6, 10.0, 30.6,
          10.0,
        ],
        backgroundColor: "#6D6A6D",
      },
    ],
  };

  const [state, setState] = useState({
    typeOne: 'Monthly',
    typeTwo: 'Daily',
    typeThree: 'Daily'
  })

  function set (obj = {}) {
    return setState(prev => {
      return {
        ...prev,
        ...(typeof obj === 'function' ? obj?.(prev) : obj)
      }
    })
  }

  useEffect(() => {
    get_chart_datas()
  }, [])

  function changeType(key, val) {
    set({[key]: val})
    get_chart_datas(val)
  }

  async function get_chart_datas(val = state.typeOne) {
    const total_expense = await axios.get('/api', {
      params: {
        name: `/master/profit/netprofit?type=${val}&sYear=${new Date().getFullYear()}&sMonth=${new Date().getMonth() + 1}`
      }
    })
    console.log("total_expense ===>", total_expense)
  }


  const salesOptions = {
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const salesDoughnutData = {
    labels: ["Match fee income", "Transfer fee income"],
    datasets: [
      {
        data: [12, 19],
        backgroundColor: ["#EDC161", "#6D6A6D"],
      },
    ],
  };

  const totalData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Bonus",
        data: [
          20.0, 10.1, 50.1, 30.6, 10.0, 20.0, 10.1, 50.0, 30.6, 10.0, 30.6,
          10.0,
        ],
        backgroundColor: "#EB5757",
      },
      {
        label: "Agent MAnager’s Salary",
        data: [
          20.0, 10.1, 50.1, 30.6, 10.0, 20.0, 10.1, 50.0, 30.6, 10.0, 30.6,
          10.0,
        ],
        backgroundColor: "#8298AB",
      },
      {
        label: "Boost Marketing",
        data: [
          20.0, 10.1, 50.1, 30.6, 10.0, 20.0, 10.1, 50.0, 30.6, 10.0, 30.6,
          10.0,
        ],
        backgroundColor: "#E2B93B",
      },
    ],
  };

  const totalOptions = {
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const totalDoughnutData = {
    labels: ["Bonus", "Agent MAnager’s Salary", "Boost Marketing"],
    datasets: [
      {
        data: [12, 19, 17],
        backgroundColor: ["#EB5757", "#8298AB", "#E2B93B"],
      },
    ],
  };



  return (
    <div className="gap-8 flex flex-col pb-16 text-white">
      <div className="w-full">
        <div className="w-full flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="bg-[#1C1C1C] flex items-center gap-[10px] px-4 py-1 cursor-pointer rounded-t w-[130px] min-w-[130px] justify-center">
                {state.typeOne}
                <img src="/icons/chevron_down.png" height={15} width={15} />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='bg-[#141414] text-[#e3e3e3]'>
              <DropdownMenuItem className='cursoir-pointer' onClick={() => changeType('typeOne', 'Daily')}>Daily</DropdownMenuItem>
              <DropdownMenuItem className='cursoir-pointer' onClick={() => changeType('typeOne', 'Monthly')}>Monthly</DropdownMenuItem>
              <DropdownMenuItem className='cursoir-pointer' onClick={() => changeType('typeOne', 'Yearly')}>Yearly</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="bg-[#1C1C1C] w-full h-[410px] py-5 px-6 rounded-b rounded-tl">
          <div className="px-28 flex gap-2 items-end">
            <div className="text-[25px] font-medium">Net Profit</div>
            <div className="text-[15px] pb-1">{`(Monthly)`}</div>
          </div>
          <div className="h-[90%] w-full flex items-center">
            <div className="rotate-180" style={{ writingMode: "vertical-rl" }}>
              {`$’ 000  (thousand dollar)`}
            </div>
            <div className="h-[90%] border-l border-white mx-4" />
            <div className="h-full w-full">
              <Bar options={profitOptions} data={profitData} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="bg-[#1C1C1C] flex items-center gap-[10px] px-4 py-1 cursor-pointer rounded-t w-[130px] min-w-[130px] justify-center">
                {state.typeOne}
                <img src="/icons/chevron_down.png" height={15} width={15} />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='bg-[#141414] text-[#e3e3e3]'>
              <DropdownMenuItem className='cursoir-pointer' onClick={() => changeType('typeOne', 'Daily')}>Daily</DropdownMenuItem>
              <DropdownMenuItem className='cursoir-pointer' onClick={() => changeType('typeOne', 'Monthly')}>Monthly</DropdownMenuItem>
              <DropdownMenuItem className='cursoir-pointer' onClick={() => changeType('typeOne', 'Yearly')}>Yearly</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="bg-[#1C1C1C] w-full h-[410px] py-5 px-6 rounded-b rounded-tl">
          <div className="px-28 flex gap-2 items-end">
            <div className="text-[25px] font-medium">Sales income</div>
            <div className="text-[15px] pb-1">{`(Monthly)`}</div>
          </div>
          <div className="h-[90%] w-full flex items-center">
            <div className="rotate-180" style={{ writingMode: "vertical-rl" }}>
              {`$’ 000  (thousand dollar)`}
            </div>
            <div className="h-[90%] border-l border-white mx-4" />
            <div className="h-full w-[50%]">
              <Bar options={salesOptions} data={salesData} />
            </div>
            <div className="h-full w-[50%]">
              <Doughnut data={salesDoughnutData} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="bg-[#1C1C1C] flex items-center gap-[10px] px-4 py-1 cursor-pointer rounded-t w-[130px] min-w-[130px] justify-center">
                {state.typeThree}
                <img src="/icons/chevron_down.png" height={15} width={15} />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='bg-[#141414] text-[#e3e3e3]'>
              <DropdownMenuItem className='cursoir-pointer' onClick={() => changeType('typeThree', 'Daily')}>Daily</DropdownMenuItem>
              <DropdownMenuItem className='cursoir-pointer' onClick={() => changeType('typeThree', 'Monthly')}>Monthly</DropdownMenuItem>
              <DropdownMenuItem className='cursoir-pointer' onClick={() => changeType('typeThree', 'Yearly')}>Yearly</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="bg-[#1C1C1C] w-full h-[410px] py-5 px-6 rounded-b rounded-tl">
          <div className="px-28 flex gap-2 items-end">
            <div className="text-[25px] font-medium">Total expense</div>
            <div className="text-[15px] pb-1">{`(Monthly)`}</div>
          </div>
          <div className="h-[90%] w-full flex items-center">
            <div className="rotate-180" style={{ writingMode: "vertical-rl" }}>
              {`$’ 000  (thousand dollar)`}
            </div>
            <div className="h-[90%] border-l border-white mx-4" />
            <div className="h-full w-[50%]">
              <Bar options={totalOptions} data={totalData} />
            </div>
            <div className="h-full w-[50%]">
              <Doughnut data={totalDoughnutData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
