import React, {useState} from "react";
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
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function Expense() {

  const [state, setState] = useState({
    typeOne: 'Monthly',
    typeTwo: 'Daily'
  })

  function set (obj = {}) {
    return setState(prev => {
      return {
        ...prev,
        ...(typeof obj === 'function' ? obj?.(prev) : obj)
      }
    })
  }

  const expenseData = {
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
        backgroundColor: "#2D6413",
      },
    ],
  };

  const expenseOptions = {};

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
        label: "Bonus",
        data: [
          20.0, 10.1, 50.1, 30.6, 10.0, 20.0, 10.1, 50.0, 30.6, 10.0, 30.6,
          10.0,
        ],
        backgroundColor: "#EB5757",
      },
      {
        label: "Boost Marketing",
        data: [
          20.0, 10.1, 50.1, 30.6, 10.0, 20.0, 10.1, 50.0, 30.6, 10.0, 30.6,
          10.0,
        ],
        backgroundColor: "#8298AB",
      },
    ],
  };

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
    labels: ["Bonus", "Boost Marketing"],
    datasets: [
      {
        data: [12, 19],
        backgroundColor: ["#EB5757", "#8298AB"],
      },
    ],
  };

  function changeType(key, val) {
    set({[key]: val})
  }

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
            <div className="text-[25px] font-medium">Total expense</div>
            <div className="text-[15px] pb-1">{`(Monthly)`}</div>
          </div>
          <div className="h-[90%] w-full flex items-center">
            <div className="rotate-180" style={{ writingMode: "vertical-rl" }}>
              {`$’ 000  (thousand dollar)`}
            </div>
            <div className="h-[90%] border-l border-white mx-4" />
            <div className="h-full w-full">
              <Bar options={expenseOptions} data={expenseData} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="bg-[#1C1C1C] flex items-center gap-[10px] px-4 py-1 cursor-pointer rounded-t w-[130px] min-w-[130px] justify-center">
                {state.typeTwo}
                <img src="/icons/chevron_down.png" height={15} width={15} />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='bg-[#141414] text-[#e3e3e3]'>
              <DropdownMenuItem className='cursoir-pointer' onClick={() => changeType('typeTwo', 'Daily')}>Daily</DropdownMenuItem>
              <DropdownMenuItem className='cursoir-pointer' onClick={() => changeType('typeTwo', 'Monthly')}>Monthly</DropdownMenuItem>
              <DropdownMenuItem className='cursoir-pointer' onClick={() => changeType('typeTwo', 'Yearly')}>Yearly</DropdownMenuItem>
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
              <Bar options={salesOptions} data={salesData} />
            </div>
            <div className="h-full w-[50%]">
              <Doughnut data={salesDoughnutData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
