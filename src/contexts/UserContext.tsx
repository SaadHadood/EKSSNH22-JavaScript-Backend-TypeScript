import React, { useState, useContext, createContext } from 'react'
import { Product, ProductRequest } from '../models/UserModel'
import { UserProviderProps } from '../models/UserProviderPropsModel'

export interface IUserContext {
    user: Product
    setUser: React.Dispatch<React.SetStateAction<Product>>
    userRequest: ProductRequest
    setUserRequest: React.Dispatch<React.SetStateAction<ProductRequest>>
    users: Product[]
    create: (e: React.FormEvent) => void
    get: (id: number) => void
    getAll: () => void
    update: (e: React.FormEvent) => void
    remove: (id: number) => void
}

export const UserContext = createContext<IUserContext | null>(null)
export const useUserContext = () => { return useContext(UserContext)}

const UserProvider = ({children} : UserProviderProps) => {
    const baseUrl = 'http://localhost:5000/api/users'
    const user_default: Product = { id: 0, category: '', title: '', description: '', image: '', price: 0 }
    const userRequest_default: ProductRequest = { category: '', title: '', description: '', image: '', price: 0 }

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

const get = async (id: number) => {
    const result = await fetch(`${baseUrl}/${id}`)
    if (result.status === 200)
        setUser(await result.json())
}

const getAll = async () => {
    const result = await fetch(`${baseUrl}`)
    if (result.status === 200)
        setUsers(await result.json())
}

const update = async (e: React.FormEvent) => {
    e.preventDefault()

    const result = await fetch(`${baseUrl}/${user.id}`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })

    if (result.status === 200)
        setUser(await result.json())
    
}

const remove = async (id: number) => {
    const result = await fetch(`${baseUrl}/${id}`, {
        method: 'delete'
    })

    if (result.status === 204)
        setUser(user_default)
}

  return (
    <UserContext.Provider value={{ user, setUser, userRequest, setUserRequest, users, create, get, getAll, update, remove }}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider