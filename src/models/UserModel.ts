export interface Product {
    id: number
    category: string
    title: string
    image: string
    description: string
    price: number
}

export interface ProductRequest {
    category: string
    image: string
    title: string
    description: string
    price: number
}