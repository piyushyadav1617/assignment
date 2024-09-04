"use client"
import json from "@/data.json"
import { useState, useEffect } from "react"
import { Line, LineChart, XAxis, YAxis } from "recharts"
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
import { DatePicker } from "./datePicker"
import { DateRange } from "react-day-picker"
import { formatDate } from "../utils"
import { type Data } from "../types"

export function ChartCard({ stock }: { stock: string }) {

    const [date, setDate] = useState<DateRange | undefined>(undefined)
    // const [data, setData] = useState<Data[]>([])

    const names: any = {
        AAPL: "Apple",
        AMZN: "Amazon",
        MSFT: "Microsoft",
        META: "Meta"
    }
    // async function getData() {
    //     const res = await fetch(`/api/?stock=${stock}`);
    //     const data = await res.json();
    //     setData(data);
    // }
    // useEffect(() => {
    //     getData();
    // }, [stock])

    const chartConfig = {
        Date: {
            label: "Date",
            color: "hsl(var(--chart-1))"
        },
        price: {
            label: stock,
            color: "hsl(var(--chart-2))",
        }
    } satisfies ChartConfig

    //@ts-ignore
    const data = json[stock];

    const filteredData = data?.filter((item: any) => {
        if (date?.from && date?.to) {
            return item.Date >= date.from && item.Date <= date.to
        }
        return true;
    })
    

    return (
        <Card className="bg-muted dark:bg-muted/50">
            <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
                <div className="grid flex-1 gap-1 text-center sm:text-left">
                    <CardTitle>{names[stock]}</CardTitle>
                </div>
                <DatePicker date={date} setDate={setDate} />
            </CardHeader>
            <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6 min-h-[250px] ">

                <ChartContainer
                    config={chartConfig}
                    className="aspect-auto h-[250px] w-full"
                >
                    <LineChart
                        accessibilityLayer
                        data={filteredData}
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
                            type="natural"
                            stroke="var(--color-price)"
                            strokeWidth={2}
                            isAnimationActive={true}
                            dot={false}
                        />
                        <ChartLegend content={<ChartLegendContent />} />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
