import React from "react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


import { type Company } from "../types"
import { LineChartFull } from "./lineChart"

export function DialogDemo({ children, stock }: { children: React.ReactNode, stock: Company }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className=" max-w-2xl p-10 -pl-10">
                <LineChartFull stock={stock} />
            </DialogContent>
        </Dialog>
    )
}
