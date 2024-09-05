import React from "react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogOverlay,
    DialogTrigger,
} from "@/components/ui/dialog"


import { type Company } from "../types"
import { LineChartFull } from "./lineChart"

export function DialogDemo({ children, stock }: { children: React.ReactNode, stock: Company }) {
    return (
        <Dialog>
            <DialogOverlay className="bg-transparent backdrop-blur-sm" />
            <DialogTrigger asChild className="cursor-pointer">
                {children}
            </DialogTrigger>
            <DialogContent className=" max-w-2xl p-10 -pl-10 bg-muted dark:bg-muted/50 backdrop-blur-md">
                <LineChartFull stock={stock} />
            </DialogContent>
        </Dialog>
    )
}
