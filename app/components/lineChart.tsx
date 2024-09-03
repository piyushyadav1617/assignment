
import { Line, LineChart, XAxis, YAxis, Bar, BarChart, CartesianGrid, LabelList, } from "recharts"


import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

import { formatDate } from "../utils"
import { type Company } from "../types"

export function LineChartFull({ stock }: { stock: Company }) {

    const chartConfig = {
        Date: {
            label: "Date",
            color: "hsl(var(--chart-1))"
        },
        price: {
            label: stock.stock,
            color: "hsl(var(--chart-2))",
        }
    } satisfies ChartConfig


    return (
        <ChartContainer
            config={chartConfig}
            className="aspect-auto h-[300px] w-full"
        >
            <LineChart
                accessibilityLayer
                data={stock.stockData}
                margin={{
                    left: -10,
                    right: 0,
                }}
            >
                <XAxis
                    dataKey="Date"
                    tickMargin={8}
                    tickFormatter={formatDate}
                />
                <YAxis dataKey="price" tickMargin={8} />
                <ChartTooltip
                    // cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                />
                <Line
                    dataKey="price"
                    type="natural"
                    stroke="var(--color-price)"
                    strokeWidth={2}
                    dot={false}
                />
                <ChartLegend content={<ChartLegendContent />} />
            </LineChart>
        </ChartContainer>
    )
}





export const description = "A bar chart with a label"

const chartData = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig

export function Component() {
    return (

        <ChartContainer config={chartConfig}>
            <BarChart
                accessibilityLayer
                data={chartData}
                margin={{
                    top: 20,
                }}
            >
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                />
                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8}>
                    <LabelList
                        position="top"
                        offset={12}
                        className="fill-foreground"
                        fontSize={12}
                    />
                </Bar>
            </BarChart>
        </ChartContainer>

    )
}
