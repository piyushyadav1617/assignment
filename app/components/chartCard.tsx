"use client"
import json from "@/data.json"
import { useState, useEffect } from "react"
import { Line, LineChart, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts"
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

    const defaulRange = {
        from: new Date(2022, 0, 1),
        to: new Date(2024, 7, 30),
    }
    const [date, setDate] = useState<DateRange | undefined>(defaulRange)
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

    const filteredData = data?.filter((item: Data) => {
        if (date?.from && date?.to) {
            return item.Date >= date.from && item.Date <= date.to
        }
        else if (date?.from) {
            return item.Date >= date.from
        }
        return true;
    })

    const ToolTipContentShow = ({ active, payload, label }: any) => {
        return (
            <div className="p-2 px-4 rounded-md bg-background/60 backdrop-blur-sm border flex flex-col w-32">
                <span className="text-lg">{payload[0]?.value.toLocaleString()}</span>
                <span className="">{formatDate(label)}</span>
            </div>
        )
    }


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
                        <Tooltip

                            // cursor={false}
                            content={<ToolTipContentShow />}
                        />
                        <CartesianGrid />
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
