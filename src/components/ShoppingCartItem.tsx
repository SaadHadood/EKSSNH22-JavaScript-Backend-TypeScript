import React from 'react'
import { useShoppingCart } from '../contexts/ShoppingCartContext'
import { item } from '../models/item'
import { currencyFormatter } from '../utilities/currencyFormatter'


interface Props {
    product: item 
}


const ShoppingCartItem: React.FC<Props> = ({product}) => {
    const { incrementQuantity, decrementQuantity, removeItem } = useShoppingCart()


  return (
    <div className="shoppingcart-item">
        <div className="item-image">
            <img src={product.product.imageName} alt={product.name} />
        </div>
        <div className="item-info">
            <div className="item-info-name">{product.product.name}</div>
            <div className="item-info-quantity">
                <button className="box-button-left" onClick={() => decrementQuantity(product)}>-</button>
                <span>{product.quantity}</span>
                <button className="box-button-right" onClick={() => incrementQuantity(product)}>+</button>
            </div>
        </div>
        <div className="item-price">
            <div>{currencyFormatter(product.product.price * product.quantity)}</div>
            <button onClick={() => removeItem(product.articleNumber)}><i className="fa-solid fa-trash"></i></button>
        </div>
    </div>
  )
}

export default ShoppingCartItem