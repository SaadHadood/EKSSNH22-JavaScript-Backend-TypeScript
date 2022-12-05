export interface Product {
    id: number
    category: string

    imageName: string
    description: string
    price: number
    name: string
}

export interface ProductRequest {
    category: string
    image: string
    title: string
    description: string
    price: number
}