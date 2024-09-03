import data from "@/data.json"
import { type NextRequest } from 'next/server'


export function GET() {
    return new Response(JSON.stringify(data), { status: 200 })
}

