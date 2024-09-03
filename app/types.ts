type Data = {
    Date: number,
    price: number,
}

type Company = {
    stock: string,
    price: number,
    minPrice: number,
    maxPrice: number,
    stockData: Data[]
}

export type { Data, Company }