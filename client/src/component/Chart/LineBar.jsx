"use client";

import React, { useState, useMemo } from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { date: "January", desktop: 2220, mobile: 1500 },
  { date: "February", desktop: 970, mobile: 1800 },
  { date: "March", desktop: 1670, mobile: 1200 },
  { date: "April", desktop: 2420, mobile: 2600 },
  { date: "May", desktop: 3730, mobile: 2900 },
  { date: "June", desktop: 3010, mobile: 3400 },
  { date: "July", desktop: 2450, mobile: 1800 },
  { date: "August", desktop: 4090, mobile: 3200 },
  { date: "September", desktop: 590, mobile: 1100 },
  { date: "October", desktop: 2610, mobile: 1900 },
  { date: "November", desktop: 3270, mobile: 3500 },
  { date: "December", desktop: 2920, mobile: 2100 },
];

const chartConfig = {
  views: {
    label: "Page Views",
  },
  desktop: {
    label: "Desktop",
    color: "#8B4513", // Dark brown
  },
  mobile: {
    label: "Mobile",
    color: "#A0522D", // Medium brown
  },
};

export default function LineBar() {
  const [activeChart, setActiveChart] = useState("desktop");

  const total = useMemo(() => {
    return {
      desktop: chartData.reduce((acc, curr) => acc + curr.desktop, 0),
      mobile: chartData.reduce((acc, curr) => acc + curr.mobile, 0),
    };
  }, []);

  return (
    <Card className="m-4 bg-[#FAEBD7] text-brown-900">
      {" "}
      {/* Light brown background */}
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b border-[#FAEBD7] p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle className="text-[#4e2a11] font-sora ">
            Line Chart - Interactive
          </CardTitle>
          <CardDescription className="text-[#4e2a11] font-sora">
            Showing total visitors for the last 12 months
          </CardDescription>
        </div>
        <div className="flex">
          {["desktop", "mobile"].map((key) => (
            <button
              key={key}
              data-active={activeChart === key}
              className="flex flex-1 flex-col justify-center gap-1 border-t border-[#FAEBD7] px-6 mt-2 py-4 text-left even:border-l data-[active=true]:bg-[#fde5c4] sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
              onClick={() => setActiveChart(key)}
            >
              <span className="text-xs text-[#8B4513] font-sora">
                {chartConfig[key].label}
              </span>
              <span className="text-[#4e2a11] text-lg font-bold leading-none sm:text-3xl font-sora">
                {total[key].toLocaleString()}
              </span>
            </button>
          ))}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[400px] w-full bg-[#FAEBD7] p-4" // Antique white for subtle background
        >
          <LineChart
            data={chartData}
            className="text-[#8B4513]"
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid stroke="#4e2a11" vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tick={{ fill: "#8B4513" }}
            />
            <YAxis
              domain={[0, "dataMax + 50"]}
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#8B4513" }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px] bg-[#F5DEB3] text-[#8B4513] border-[#DEB887]"
                  nameKey="views"
                  labelFormatter={(value) => value}
                />
              }
            />
            <Line
              dataKey={activeChart}
              type="monotone"
              stroke={chartConfig[activeChart].color}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
