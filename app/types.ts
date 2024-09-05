type Data = {
    Date: number | Date,
    price: number,
}

type Company = {
    stock: string,
    price: number,
    dateRange: string,
    minPrice: number,
    maxPrice: number,
    stockData: Data[]
}

export type { Data, Company }