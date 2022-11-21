import { ReactNode } from "react";
import ShoppingCart from "../components/ShoppingCart";



export interface ICartProviderProps {
    children?: ReactNode | undefined;
}

const { createContext, useContext, useState } = require("react");

const ShoppingCartContext = createContext()

export const useShoppingCart = () => {
    return useContext (ShoppingCartContext)
}

export const ShoppingCartProvider: React.FC<ICartProviderProps> = ({children}) => {
    const [cartItems, setCartItems] = useState ([])

    const cartQuantity = cartItems.reduce(
        (quantity: number, item: { quantity: number; }) => item.quantity + quantity, 0
    )

    const getItemQuantity = (articleNumber: string) => {
        return cartItems.find((item: { articleNumber: string; }) => item.articleNumber === articleNumber)?.quantity || 0
    }


    /* lägga till product i kundvagnen */

    const incrementQuantity = (cartItem: { articleNumber: number|string; product: string; }) => {
        const {articleNumber, product} = cartItem

        setCartItems((items: { articleNumber: string | number; quantity: number; }[]) => {
            if (items.find((item: { articleNumber: string | number; }) => item.articleNumber === articleNumber) == null) {
                return [...items, {articleNumber, product, quantity: 1 }]
            } else {
                return items.map((item: { articleNumber: string | number; quantity: number; }) => {
                    if (item.articleNumber === articleNumber) {
                        return {...item, quantity: item.quantity + 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    /* stega bort antal product */
    const decrementQuantity = (cartItem: { articleNumber: string|number; }) => {
        const {articleNumber} = cartItem

        setCartItems((items: any[]) => {
            if (items.find((item: { articleNumber: string | number; }) => item.articleNumber === articleNumber).quantity === 1) {
                return items.filter((item: { articleNumber: string | number; }) => item.articleNumber !== articleNumber)
            } else {
                return items.map((item: { articleNumber: string | number; quantity: number; }) => {
                    if (item.articleNumber === articleNumber) {
                        return {...item, quantity: item.quantity - 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    /* ta bort product */
    const removeItem = (articleNumber: string|number) => {
        setCartItems ((items: any[]) => {
            return items.filter((item: { articleNumber: string|number; }) => item.articleNumber !== articleNumber)
        })
    }


    return <ShoppingCartContext.Provider value={{cartItems, cartQuantity, getItemQuantity, incrementQuantity, decrementQuantity, removeItem}}>
        {children}
        <ShoppingCart />
    </ShoppingCartContext.Provider>
}