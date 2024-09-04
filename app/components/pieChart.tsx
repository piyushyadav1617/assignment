"use client"

import { Pie, PieChart, LabelList } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"


const smartphoneMarketShare = [
    { brand: "Samsung", share: 21, fill: "var(--color-samsung)" },
    { brand: "Apple", share: 18, fill: "var(--color-apple)" },
    { brand: "Xiaomi", share: 13, fill: "var(--color-xiomi)" },
    { brand: "Oppo", share: 9, fill: "var(--color-oppo)" },
    { brand: "Vivo", share: 8, fill: "var(--color-vivo)" },
];




const chartConfig = {
    phones: {
        label: "Phones"
    },
    samsung: {
        label: "Samsung",
        color: "hsl(var(--chart-1))",
    },
    apple: {
        label: "Apple",
        color: "hsl(var(--chart-2))",
    },
    xiomi: {
        label: "Xiaomi",
        color: "hsl(var(--chart-3))",
    },
    oppo: {
        label: "Oppo",
        color: "hsl(var(--chart-4))",
    },
    vivo: {
        label: "Vivo",
        color: "hsl(var(--chart-5))",
    },
} satisfies ChartConfig

export function PieChartComponent() {
    return (
        <Card className="flex flex-col">
            <CardHeader className="items-center pb-0">
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px]"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent />}
                        />


                        <Pie data={smartphoneMarketShare} dataKey="share" nameKey="brand" >
                            <LabelList
                                dataKey="brand"
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
