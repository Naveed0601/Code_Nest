import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
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

const chartData = [
  { month: "January", desktop: 18600, mobile: 8000 },
  { month: "February", desktop: 30500, mobile: 20000 },
  { month: "March", desktop: 23700, mobile: 12000 },
  { month: "April", desktop: 7300, mobile: 19000 },
  { month: "May", desktop: 20900, mobile: 13000 },
  { month: "June", desktop: 21400, mobile: 14000 },
  { month: "July", desktop: 25000, mobile: 15000 },
  { month: "August", desktop: 28000, mobile: 16000 },
  { month: "September", desktop: 29000, mobile: 17000 },
  { month: "October", desktop: 31000, mobile: 18000 },
  { month: "November", desktop: 33000, mobile: 19000 },
  { month: "December", desktop: 35000, mobile: 20000 },
];

const chartConfig = {
  desktop: { label: "Desktop", color: "hsl(20, 60%, 40%)" },
  mobile: { label: "Mobile", color: "hsl(30, 50%, 50%)" },
};

export default function MultipleBar() {
  const totalVisitors = chartData.reduce(
    (acc, { desktop, mobile }) => acc + desktop + mobile,
    0
  );

  const headline =
    totalVisitors > 50000
      ? `$ ${totalVisitors.toLocaleString()}`
      : "Bar Chart - Multiple";

  return (
    <Card className="m-4 rounded-lg w-full h-[397px] sm:w-[450px] bg-[#FAEBD7]">
      <CardHeader>
        <CardTitle className="text-[#e28c4f] font-bold font-sora">
          {headline}
        </CardTitle>
        <CardDescription className="text-[#db8141] font-sora">
          Total Sales
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} stroke="hsl(20, 60%, 60%)" />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              tick={{ fill: "hsl(20, 60%, 60%)" }}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="desktop" fill="hsl(20, 60%, 40%)" radius={4} />
            <Bar dataKey="mobile" fill="hsl(30, 50%, 50%)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm text-[#db8141] font-sora">
        <div className="flex gap-2 font-medium leading-none text-brown-100">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-brown-300">
          Showing total visitors for the last 12 months:{" "}
          {totalVisitors.toLocaleString()}
        </div>
      </CardFooter>
    </Card>
  );
}
