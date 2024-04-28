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

export default function SalesIncome() {
  const salesIncomeData = {
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

  const salesIncomeOptions = {};

  const gamesData = {
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
        backgroundColor: "#F94144",
      },
    ],
  };

  const gamesOptions = {};

  const agentsData = {
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

  const agentsOptions = {};

  return (
    <div className="gap-8 flex flex-col pb-16 text-white">
      <div className="w-full">
        <div className="w-full flex justify-end">
          <div className="bg-[#1C1C1C] w-fit flex items-center gap-[10px] px-4 py-1 cursor-pointer rounded-t">
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
              <Bar options={salesIncomeOptions} data={salesIncomeData} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full flex justify-end">
          <div className="bg-[#1C1C1C] w-fit flex items-center gap-[10px] px-4 py-1 cursor-pointer rounded-t">
            Monthly
            <img src="/icons/chevron_down.png" height={15} width={15} />
          </div>
        </div>
        <div className="bg-[#1C1C1C] w-full h-fit py-5 px-6 flex gap-8 rounded-b rounded-tl">
          <div className="w-[40%]">
            <div className="flex w-full text-[15px] text-white font-bold pb-2">
              <div className="w-[7%]"></div>
              <div className="w-[43%]">Name</div>
              <div className="w-[25%]">Company</div>
              <div className="w-[25%]">Fee</div>
            </div>
            <div className="flex flex-col gap-3">
              {[{}, {}, {}, {}, {}, {}].map((x, i) => (
                <div
                  key={i * 123}
                  className="flex w-full items-center text-[15px] text-white font-bold bg-[#101010] cursor-pointer hover:bg-[#151515] transition-all rounded-[5px] p-[10px]"
                >
                  <div className="w-[7%]">{i + 1}.</div>
                  <div className="flex items-center gap-3 w-[43%]">
                    <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-[#EB5757]">
                      BS
                    </div>
                    <div
                      style={{ width: "calc(100% - 42px)" }}
                      className="truncate"
                    >
                      BS game
                    </div>
                  </div>
                  <div className="w-[25%] truncate">BBROI LLC</div>
                  <div className="w-[25%] truncate">1500$</div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[60%] flex flex-col gap-4">
            <div className="h-1/2 w-full">
              <div className="text-xl pl-7">Games</div>
              <Bar options={gamesOptions} data={gamesData} />
            </div>
            <div className="h-1/2 w-full">
              <div className="text-xl pl-7">Agents</div>
              <Bar options={agentsOptions} data={agentsData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
