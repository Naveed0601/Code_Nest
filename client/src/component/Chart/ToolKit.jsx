"use client";

import { Bar, BarChart, XAxis } from "recharts";

const chartData = [
  { date: "2024-07-15", running: 450, swimming: 300 },
  { date: "2024-07-16", running: 380, swimming: 420 },
  { date: "2024-07-17", running: 520, swimming: 120 },
  { date: "2024-07-18", running: 140, swimming: 550 },
  { date: "2024-07-19", running: 600, swimming: 350 },
  { date: "2024-07-20", running: 480, swimming: 400 },
];

export default function ToolKit() {
  return (
    <div className="bg-[#FAEBD7] h-[400px] mt-[14px] text-[#e28c4f] p-5 mr-5 rounded-lg ">
      <h1 className="text-[#e28c4f] font-sora font-bold text-lg mb-2">
        Tooltip - Advanced
      </h1>
      <p className="text-[#db8141] font-sora mb-5">
        Tooltip with custom formatter and total.
      </p>
      <div className="overflow-hidden rounded-lg">
        <BarChart width={350} height={300} data={chartData}>
          <XAxis
            dataKey="date"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => {
              return new Date(value).toLocaleDateString("en-US", {
                weekday: "short",
              });
            }}
            tick={{ fill: "#e28c4f" }}
          />
          <Bar
            dataKey="running"
            stackId="a"
            fill="brown"
            radius={[0, 0, 4, 4]}
          />
          <Bar
            dataKey="swimming"
            stackId="a"
            fill="#8B4513"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </div>
    </div>
  );
}
