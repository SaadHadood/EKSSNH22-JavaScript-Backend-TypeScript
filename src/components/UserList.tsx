import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import {IUserContext, UserContext} from '../contexts/UserContext'
import { Product } from '../models/UserModel'

const UserList = () => {
    const { users, getAll, remove } = React.useContext(UserContext) as IUserContext


    useEffect(() => {
        getAll()
        
    }, [getAll])


  return (
    <>

        {
            users.map((user: Product) => (
            <section className="userList mb-3 container"> 
            <div className="mb-3"> <h5>Category:</h5> {user.category}</div> 
            <div className="mb-3"> <h5>title:</h5> {user.title} </div> 
            <div className="mb-3"> <h5>image:</h5> {user.image}</div> 
            <div className="mb-3"> <h5>description:</h5> {user.description}</div>
            <div className="mb-3"> <h5>price:</h5> {user.price}</div>
            <div onClick={() => remove(user.id)} key={user.id}><i className="fa-sharp fa-solid fa-trash"></i> Delete the product </div>
            <br></br>
            <NavLink className="update" to={"/updateproduct/"+user.id} end><i className="fa-solid fa-pen-to-square"></i> Update product</NavLink>

            </section>))
        }
    
    
    </>
  )
}

export default UserList