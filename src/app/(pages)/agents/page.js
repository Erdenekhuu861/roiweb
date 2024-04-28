"use client";

import React from "react";
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
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function Agents() {
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
        data: [
          20.0, 10.1, 50.1, 30.6, 10.0, 20.0, 10.1, 50.0, 30.6, 10.0, 30.6,
          10.0,
        ],
        backgroundColor: "#A23BE2",
      },
    ],
  };

  const salesOptions = {};

  const topData = {
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
        barThickness: 5,
        backgroundColor: "#4148F9",
      },
    ],
  };

  const topOptions = {};

  return (
    <div className="w-full h-fit text-white flex flex-col gap-4 mb-5">
      <div className="w-full">
        <div className="w-full flex justify-end">
          <div className="bg-[#1C1C1C] w-fit flex items-center gap-[10px] px-[10px] py-1 cursor-pointer rounded-t">
            Monthly
            <img src="/icons/chevron_down.png" height={15} width={15} />
          </div>
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
            <div className="h-full w-full">
              <Bar options={salesOptions} data={salesData} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="bg-[#1C1C1C] w-full py-5 px-6 rounded">
          <div className="w-full flex justify-between items-center">
            <div className="font-bold">User</div>
            <div className="flex items-center gap-4">
              <img src="/icons/pdf.png" height={20} width={20} />
              <img src="/icons/print.png" height={20} width={20} />
            </div>
          </div>
          <div className="w-full flex justify-between mt-4">
            <div className="flex gap-2 items-center">
              <input type="checkbox" />
              <div>All transfer</div>
            </div>
            <div className="flex gap-7">
              <div className="flex items-center justify-between h-7 px-3 w-[160px] border border-white rounded-[5px]">
                ID and Email{" "}
                <img src="/icons/search.png" height={20} width={20} />
              </div>
              <div className="w-[150px] h-7 px-3 border border-white rounded-[5px]">
                starting date
              </div>
              <div className="w-[150px] h-7 px-3 border border-white rounded-[5px]">
                finishing date
              </div>
            </div>
          </div>
          <div className="border-t border-white w-full mt-4 pt-2">
            <div className="flex bg-[#6D6A6D]">
              <div className="w-[12.5%] text-center">Date</div>
              <div className="w-[12.5%] text-center">Time</div>
              <div className="w-[12.5%] text-center">All</div>
              <div className="w-[12.5%] text-center">Email</div>
              <div className="w-[12.5%] text-center">Fee %</div>
              <div className="w-[12.5%] text-center">User type</div>
              <div className="w-[12.5%] text-center">Country</div>
              <div className="w-[12.5%] text-center">Total Salary</div>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              {[{}, {}, {}, {}].map((x, i) => (
                <div key={i * 123} className="flex bg-[#6D6A6D]">
                  <div className="w-[12.5%] text-center">2023. Sep.25</div>
                  <div className="w-[12.5%] text-center">14:00:25</div>
                  <div className="w-[12.5%] text-center">215044444</div>
                  <div className="w-[12.5%] text-center">
                    username@email.com
                  </div>
                  <div className="w-[12.5%] text-center">0.2%</div>
                  <div className="w-[12.5%] text-center">Agents</div>
                  <div className="w-[12.5%] flex justify-center">
                    <img src="/icons/mgl_flag.png" width={20} height={20} />
                  </div>
                  <div className="w-[12.5%] text-center">20.000$</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="bg-[#1C1C1C] w-full py-5 px-6 flex rounded">
          <div className="w-[40%] flex flex-col gap-7">
            <div className="w-full flex justify-between">
              <div className="text-xl font-bold">Fee</div>
              <div className="font-bold">5 minutes</div>
            </div>
            <div className="h-full w-full">
              <div className="text-[#E2B93B] font-semibold">Top 10</div>
              <Bar options={topOptions} data={topData} />
            </div>
          </div>
          <div className="w-[60%] flex flex-col gap-7">
            <div className="w-full flex justify-end">
              <div className="flex gap-5 items-center">
                <img src="/icons/refresh.png" height={20} width={20} />
                <div className="flex items-center justify-between h-7 px-3 w-[160px] border border-white rounded-[5px]">
                  Search <img src="/icons/search.png" height={20} width={20} />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-x-16 gap-y-11 px-[52px] border-l border-white">
              {[{}, {}, {}, {}, {}, {}, {}].map((x, i) => (
                <div
                  key={i}
                  className="w-[45.9%] flex items-center gap-4 bg-[#29292F] rounded-[5px] py-[10px] px-[14px]"
                >
                  <div className="bg-[#6370DD] w-12 h-12 rounded-full"></div>
                  <div>
                    <div>Elvis Burn</div>
                    <div>star</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
