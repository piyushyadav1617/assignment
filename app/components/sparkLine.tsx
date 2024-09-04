"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"


import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A multiple line chart"



const chartConfig = {
    price: {
        label: "Price",
        color: "hsl(var(--chart-5))",
    },
} satisfies ChartConfig

export function SparkLine({ data }: { data: any }) {
    return (
        <ChartContainer config={chartConfig} className="h-16">
            <LineChart
                accessibilityLayer
                data={data}
                margin={{
                    left: 0,
                    right: 0,
                }}
            >
                <Line
                    dataKey="price"
                    type="monotone"
                    stroke="var(--color-price)"
                    strokeWidth={2}
                    dot={false}
                />

            </LineChart>
        </ChartContainer>
    )
}
