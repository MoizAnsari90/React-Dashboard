

import { Bar, BarChart } from "recharts"

import { ChartContainer, ChartTooltipContent } from "@/components/ui/charts"

export function ChartSet() {
  return (
    <ChartContainer>
      <BarChart data={data}>
        <Bar dataKey="value" />
        <ChartTooltip content={<ChartTooltipContent />} />
      </BarChart>
    </ChartContainer>
  )
}



// const ChartSet = () => {
//   return (
//     <div className="text-white">
//         <h1>Pakistan</h1>
//     </div>
//   );
// }

// export default ChartSet;
