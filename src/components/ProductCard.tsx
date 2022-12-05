import React from 'react'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../contexts/ShoppingCartContext'
import { item } from '../models/item'


interface Props {
    product: item 
}

const ProductCard: React.FC<Props> = ({product}) => {
    const { incrementQuantity } = useShoppingCart()



  return (
    <div className="col">
    <div className="card h-100">
        <img src={product.imageName} srcSet={product.img} alt={product.name} />
        <ul className="card-menu">
            <li><button><i className="fa-regular fa-heart"></i></button></li>
            <li><button><i className="fa-regular fa-code-compare fa-flip-horizontal"></i></button></li>
            <li><button onClick={() => incrementQuantity({articleNumber: product.id, product: product})}><i className="fa-regular fa-bag-shopping"></i></button></li>
        </ul>
        <NavLink to={`/products/${product.id || product.name }`} className="quick-button"><button >QUICK VIEW</button></NavLink>
        <div className="card-background"></div>
    </div>
    <div className="card-body">
        <p>{product.category}</p>
        <h1>{product.name}</h1>
        <div className="text-theme">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
        </div>
        
        <div className="d-flex justify-content-center align-products-center w-100">
            <p className="card-discount-price">${product.price}</p>
        </div>   
    </div>
</div>
  )
}

export default ProductCard