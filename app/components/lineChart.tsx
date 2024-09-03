"use client"
import jsonData from "../../data.json"
import * as React from "react"
// import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from "recharts"
// import data2 from "../../norm_stock_data (1).json"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


// "AAPL":100.0,"AMZN":100.0,"MSFT":100.0,"META":100.0
const data = jsonData["AAPL"]
const chartConfig = {
    Date: {
        label: "Date",
        color: "hsl(var(--chart-1))"
    },
    price: {
        label: "Apple",
        color: "hsl(var(--chart-2))",
    }
} satisfies ChartConfig

// console.log(new Date(data2[0].Date))
export function LineChartFull() {
    const [timeRange, setTimeRange] = React.useState("90d")

    const filteredData = data.filter((item) => {
        const date = new Date(item.Date)
        const now = new Date(1724976000000)
        let daysToSubtract = 90
        if (timeRange === "1year") {
            daysToSubtract = 365
        }
        else if (timeRange === "30d") {
            daysToSubtract = 30
        } else if (timeRange === "7d") {
            daysToSubtract = 7
        }
        now.setDate(now.getDate() - daysToSubtract)
        return date >= now
    })
    const formatDate = (value: any) => {
        const time = new Date(value)
        const date = time.getDate();
        const month = time.getMonth() + 1;
        const year = time.getFullYear();
        return `${date}/${month}/${year}`
    }
    console.log(data)
    return (
        <Card>
            <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
                <div className="grid flex-1 gap-1 text-center sm:text-left">
                    <CardTitle>Line Chart</CardTitle>
                    <CardDescription>
                        Showing results for the last 3 months
                    </CardDescription>
                </div>
                <Select value={timeRange} onValueChange={setTimeRange}>
                    <SelectTrigger
                        className="w-[160px] rounded-lg sm:ml-auto"
                        aria-label="Select a value"
                    >
                        <SelectValue placeholder="Last 3 months" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                        <SelectItem value="1year" className="rounded-lg">
                            Last 1 year
                        </SelectItem>
                        <SelectItem value="90d" className="rounded-lg">
                            Last 3 months
                        </SelectItem>
                        <SelectItem value="30d" className="rounded-lg">
                            Last 30 days
                        </SelectItem>
                        <SelectItem value="7d" className="rounded-lg">
                            Last 7 days
                        </SelectItem>
                    </SelectContent>
                </Select>
            </CardHeader>
            <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
                <ChartContainer
                    config={chartConfig}
                    className="aspect-auto h-[250px] w-full"
                >
                    <ChartContainer config={chartConfig}>
                        <LineChart
                            accessibilityLayer
                            data={data}
                            margin={{
                                left: -14,
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
                                label="Apple"
                                type="natural"
                                stroke="var(--color-price)"
                                strokeWidth={2}
                                dot={false}
                            />
                            {/* <Line
                                dataKey="AMZN"
                                type="natural"
                                stroke="var(--color-AMZN)"
                                strokeWidth={2}
                                // dot={{
                                //     fill: "var(--color-AAPL)",
                                // }}
                                // activeDot={{
                                //     r: 6,
                                // }}
                                dot = {false}
                            /> */}
                            <ChartLegend content={<ChartLegendContent />} />
                            {/* <Line dataKey="mobile" type="natural" stroke="var(--color-mobile)" strokeWidth={2} dot={{ fill: "var(--color-mobile)" }} activeDot={{ r: 6 }} /> */}
                        </LineChart>
                    </ChartContainer>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
