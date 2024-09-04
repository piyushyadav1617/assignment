"use client"
import { useEffect, useState } from "react"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { SparkLine } from "./sparkLine"
import { Button } from "@/components/ui/button"
import { DialogDemo } from "./modal"
import json from "@/data.json"
import { type Company, Data } from "../types"
import { formatDate, getDateRange } from "../utils"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Ellipsis } from "lucide-react"

export function CompaniesList({ setStock }: { setStock: React.Dispatch<React.SetStateAction<string>> }) {
    const [companies, setCompanies] = useState<Company[]>([])

    async function getData() {
        // const res = await fetch(`/api/all`);
        // const data = await res.json();
        const data = json;

        const apple = data["AAPL"] as Data[];
        const amazon = data["AMZN"] as Data[];
        const microsoft = data["MSFT"] as Data[];
        const meta = data["META"] as Data[];
        const dateRange = getDateRange(apple[0].Date, apple[apple.length - 1].Date)
        setCompanies([
            {
                stock: "AAPL",
                price: apple[apple.length - 1].price,
                dateRange: getDateRange(apple[0].Date, apple[apple.length - 1].Date),
                minPrice: Math.min(...apple.map(item => item.price)),
                maxPrice: Math.max(...apple.map(item => item.price)),
                stockData: apple
            },
            {
                stock: "AMZN",
                price: amazon[amazon.length - 1].price,
                dateRange: getDateRange(amazon[0].Date, amazon[amazon.length - 1].Date),

                minPrice: Math.min(...amazon.map(item => item.price)),
                maxPrice: Math.max(...amazon.map(item => item.price)),
                stockData: amazon
            },
            {
                stock: "MSFT",
                price: microsoft[microsoft.length - 1].price,
                dateRange: getDateRange(microsoft[0].Date, microsoft[microsoft.length - 1].Date),
                minPrice: Math.min(...microsoft.map(item => item.price)),
                maxPrice: Math.max(...microsoft.map(item => item.price)),
                stockData: microsoft
            },
            {
                stock: "META",
                price: meta[meta.length - 1].price,
                dateRange: getDateRange(meta[0].Date, meta[meta.length - 1].Date),
                minPrice: Math.min(...meta.map(item => item.price)),
                maxPrice: Math.max(...meta.map(item => item.price)),
                stockData: meta
            }
        ])
    }

    useEffect(() => {
        getData();
    }, [])


    return (
        <div className="border p-2 my-14 rounded-lg bg-muted/50">
            <Table className="">
                <TableHeader className="bg-muted">
                    <TableRow>
                        <TableHead className="text-left">Stock</TableHead>
                        <TableHead className="text-left">Price</TableHead>
                        <TableHead className="text-left text-nowrap">Date Range</TableHead>
                        <TableHead className="text-left  text-nowrap">Min Price</TableHead>
                        <TableHead className="text-left  text-nowrap">Max Price</TableHead>
                        <TableHead className="text-left text-nowrap">Last 30 days</TableHead>
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {companies.map((stock) => (
                        <TableRow key={stock.stock}>
                            <TableCell className="text-left font-medium">
                                <Button variant={"outline"} onClick={() => setStock(stock.stock)}>
                                    {stock.stock}
                                </Button>
                            </TableCell>
                            <TableCell className="text-left">{stock.price.toLocaleString()}</TableCell>
                            <TableCell className="text-wrap text-left flex  justify-start w-36">{stock.dateRange}</TableCell>
                            <TableCell className="text-left">{stock.minPrice.toLocaleString()}</TableCell>
                            <TableCell className="text-left">{stock.maxPrice.toLocaleString()}</TableCell>
                            <TableCell className="">
                                <DialogDemo stock={stock}>
                                    <div className="flex flex-col items-start justify-center">
                                        <SparkLine data={stock.stockData.slice(-30)} />
                                    </div>
                                </DialogDemo>
                            </TableCell>
                            <TableCell>
                                <Button variant={"ghost"}>
                                    <Ellipsis className="h-6 w-6" />
                                </Button>

                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
