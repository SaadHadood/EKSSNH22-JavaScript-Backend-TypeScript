import { useContext, useState } from "react"
import { createContext } from "react"
import { ProductItem } from "../models/item"
import { Product, ProductRequest } from "../models/UserModel"


interface ProductProviderType {
    children: any
}


export interface ProductContextType {
    product: ProductItem
    products: ProductItem[]
    featured: ProductItem[]
    discount: ProductItem[]
    discount2: ProductItem[]
    get: (articleNumber?: any) => void
    getAll: () => void
    getFeatured: (take?: number) => void
    getDiscount: (take?: number) => void
    getDiscount2: (take?: number) => void
    user: Product
    setUser: React.Dispatch<React.SetStateAction<Product>>
    setProduct: React.Dispatch<React.SetStateAction<ProductItem>>
    userRequest: ProductRequest
    setUserRequest: React.Dispatch<React.SetStateAction<ProductRequest>>
    users: Product[]
    create: (e: React.FormEvent) => void
    update: any
    remove: (id: number) => void
    getAllCreatProduct: () => void
}

export const ProductContext = createContext<ProductContextType | null>(null)
export const useProductContext = () => {return useContext(ProductContext)}

const ProductProvider: React.FC<ProductProviderType> = ({children}) => {
    const baseUrl:string = 'http://localhost:5000/api/products'
    const EMPTY_PRODUCT: ProductItem = { tag: '', id: 0, name: '', description:'', category: '', price: 0, imageName: '' }

    const user_default: Product = { id: 0, category: '', name: '', description: '', imageName: '', price: 0 }
    const userRequest_default: ProductRequest = { category: '', name: '', description: '', image: '', price: 0 }

    const [product, setProduct] = useState<ProductItem>(EMPTY_PRODUCT)
    const [products, setProducts] = useState<ProductItem[]>([])
    const [featured, setFeatured] = useState<ProductItem[]>([])
    const [discount, setDiscount] = useState<ProductItem[]>([])
    const [discount2, setDiscount2] = useState<ProductItem[]>([])

    const [user, setUser] = useState<Product>(user_default)
    const [userRequest, setUserRequest] = useState<ProductRequest>(userRequest_default)
    const [users, setUsers] = useState<Product[]>([])



    const create = async (e: React.FormEvent) => {
        e.preventDefault()
    
        const result = await fetch(`${baseUrl}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userRequest)
        })
    
        if (result.status === 201)
            setUserRequest(userRequest_default)
        }




    const get = async (articleNumber?: string) => {
        if (articleNumber !== undefined) {
            const res = await fetch(baseUrl + `/product/details/${articleNumber}`)
            setProduct(await res.json())
        }
    }

    const getAll = async () => {
        const res = await fetch(baseUrl)
        setProducts(await res.json())
    }

    const getFeatured = async (take: number = 0) => {
        let url = `${baseUrl}/featured`

        if (take !== 0)
            url += `/${take}`

        const res = await fetch(url)
        setFeatured(await res.json())
    }

    const getDiscount = async (take: number = 0) => {
        let url = `${baseUrl}/discount`

        if (take !== 0)
        url += `/${take}`

        const res = await fetch(url)
        setDiscount(await res.json())
    }

    const getDiscount2 = async (take: number = 0) => {
        let url = `${baseUrl}/discount2`

        if (take !== 0)
        url += `/${take}`

        const res = await fetch(url)
        setDiscount2(await res.json())
    }

    const getAllCreatProduct = async () => {
        const result = await fetch(`${baseUrl}`)
        if (result.status === 200)
            setUsers(await result.json())
    }


    const update = async (id:number, e: React.FormEvent) => {
        e.preventDefault()
    
        const result = await fetch(`${baseUrl}/${id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    
        if (result.status === 200)
            setProduct(await result.json())
        
    }
    
    const remove = async (id: number) => {
        const result = await fetch(`${baseUrl}/${id}`, {
            method: 'delete'
        })
    
        if (result.status === 204)
            setUser(user_default)
    }


    return <ProductContext.Provider value={{ user, setUser, setProduct, userRequest, setUserRequest, users, create, update, remove, getAllCreatProduct, product, products, featured, discount, discount2, get, getAll, getFeatured, getDiscount, getDiscount2}}>
        {children}
    </ProductContext.Provider>
}

export default ProductProvider