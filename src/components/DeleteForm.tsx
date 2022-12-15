import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import {ProductContextType, ProductContext} from '../contexts/ProductContext'
import { Product } from '../models/UserModel'

const DeleteForm = () => {
    const { users, getAllCreatProduct, remove } = React.useContext(ProductContext) as ProductContextType


    useEffect(() => {
      getAllCreatProduct()
        
    }, [getAllCreatProduct])


  return (
    <>

        {
            users.map((user: Product) => (
            <section className="userList mb-3 container"> 
            <div className="mb-3"> <h5>Category:</h5> {user.category}</div> 
            <div className="mb-3"> <h5>title:</h5> {user.name} </div> 
            <div className="mb-3"> <h5>image:</h5> {user.imageName}</div> 
            <div className="mb-3"> <h5>price:</h5> {user.price}</div>
            <div onClick={() => remove(user.id)} key={user.id}><i className="fa-sharp fa-solid fa-trash"></i> Delete product </div>
            <br></br>
            </section>))
        }
    
    
    </>
  )
}

export default DeleteForm