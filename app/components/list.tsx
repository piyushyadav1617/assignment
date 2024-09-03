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
import { type Company } from "../types"


export function CompaniesList({ setStock }: { setStock: React.Dispatch<React.SetStateAction<string>> }) {
    const [companies, setCompanies] = useState<Company[]>([])


    async function getData() {
        // const res = await fetch(`/api/all`);
        // const data = await res.json();
        const data = json;

        const apple = data["AAPL"];
        const amazon = data["AMZN"];
        const microsoft = data["MSFT"];
        const meta = data["META"];
        setCompanies([
            {
                stock: "AAPL",
                price: apple[apple.length - 1].price,
                minPrice: Math.min(...apple.map(item => item.price)),
                maxPrice: Math.max(...apple.map(item => item.price)),
                stockData: apple
            },
            {
                stock: "AMZN",
                price: amazon[amazon.length - 1].price,
                minPrice: Math.min(...amazon.map(item => item.price)),
                maxPrice: Math.max(...amazon.map(item => item.price)),
                stockData: amazon
            },
            {
                stock: "MSFT",
                price: microsoft[microsoft.length - 1].price,
                minPrice: Math.min(...microsoft.map(item => item.price)),
                maxPrice: Math.max(...microsoft.map(item => item.price)),
                stockData: microsoft
            },
            {
                stock: "META",
                price: meta[meta.length - 1].price,
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
        <div className="border p-2 my-14 rounded-lg bg-muted dark:bg-muted/50">
            <Table className="">
                <TableHeader className="dark:bg-muted">
                    <TableRow>
                        <TableHead>Stock</TableHead>
                        <TableHead>Price</TableHead>
                        {/* <TableHead>Date Range</TableHead> */}
                        <TableHead className="text-nowrap">Min Price</TableHead>
                        <TableHead className="text-nowrap">Max Price</TableHead>
                        <TableHead className="text-nowrap">Last 30 days</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {companies.map((stock) => (
                        <TableRow key={stock.stock}>
                            <TableCell className="font-medium">
                                <Button variant={"outline"} onClick={() => setStock(stock.stock)}>
                                    {stock.stock}
                                </Button>
                            </TableCell>
                            <TableCell>{stock.price.toLocaleString()}</TableCell>
                            {/* <TableCell>{stock.dateRange}</TableCell> */}
                            <TableCell>{stock.minPrice.toLocaleString()}</TableCell>
                            <TableCell>{stock.maxPrice.toLocaleString()}</TableCell>
                            <TableCell className="w-40">
                                <DialogDemo stock={stock}>
                                    <div className="flex flex-col items-start justify-center">
                                        <SparkLine data={stock.stockData.slice(-30)}/>
                                    </div>
                                </DialogDemo>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
