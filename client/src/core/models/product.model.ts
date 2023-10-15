export interface IProductParams {
    id: number
    title: string
    description: string
}

export interface IProductSizes {
    id: number
    size: string
    quantity: number
}

export interface IProductDecoration {
    id: number
    name: string
    quantity: number
}

export interface IProductIngiredients {
    id: number
    name: string
    quantity: number
}

export interface IProduct {
    id: number,
    image: string,
    price: number,
    name: string,
    discount?: number,
    promotion?: number
}
