import data from "@/data.json"
import { type NextRequest } from 'next/server'

type query = "AAPL" | "AMZN" | "MSFT" | "META"

export function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('stock') as query
    if (!query) {
        return new Response('Missing stock query parameter', { status: 400 })
    }
    return new Response(JSON.stringify(data[query]), { status: 200 })
}

