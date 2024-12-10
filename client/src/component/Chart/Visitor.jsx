import { TrendingUp } from "lucide-react";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [{ month: "january", desktop: 1260, mobile: 570 }];
const chartConfig = {
  desktop: { label: "Desktop", color: "#8B4513" },
  mobile: { label: "Mobile", color: "#A0522D" },
};

export default function Visitor() {
  const totalVisitors = chartData[0].desktop + chartData[0].mobile;

  return (
    <Card className="flex flex-col mr-3 w-full sm:w-[450px] h-[399px] mt-[14px] bg-[#FAEBD7] rounded-lg text-[#5C4033]">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-[#e28c4f] font-bold font-sora">
          Radial Chart - Stacked
        </CardTitle>
        <CardDescription className="text-[#db8141] font-sora">
          January - June 2024
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 items-center pb-0 -mb-8">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[250px]"
        >
          <RadialBarChart
            data={chartData}
            endAngle={180}
            innerRadius={80}
            outerRadius={130}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-[#e28c4f] font-sora text-2xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-[#e28c4f] font-sora"
                        >
                          Visitors
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="desktop"
              stackId="a"
              cornerRadius={5}
              fill="#8B4513"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="mobile"
              fill="#A0522D"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm text-[#e28c4f] font-sora">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month{" "}
          <TrendingUp className="h-4 w-4 text-[#e28c4f]" />
        </div>
        <div className="leading-none text-[#e28c4f]">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
