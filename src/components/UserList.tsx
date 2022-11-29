import React, { useEffect } from 'react'
import {IUserContext, UserContext} from '../contexts/UserContext'
import { Product } from '../models/UserModel'

const UserList = () => {
    const { users, getAll, remove } = React.useContext(UserContext) as IUserContext


    useEffect(() => {
        getAll()
        
    }, [getAll])


  return (
    <>
    <h3 className="display-6 mb-4">List of Products</h3>

        {
            users.map((user: Product) => (<section onClick={() => remove(user.id)} key={user.id} className="mb-3"> <div className="mb-3"> <h5>Category:</h5> {user.category}</div> <div className="mb-3"><h5>title:</h5> {user.title} </div> <div className="mb-3"> <h5>image:</h5> {user.image}</div> <div className="mb-3"> <h5>description:</h5> {user.description}</div><div className="mb-3"> <h5>price:</h5> {user.price}</div></section>))
        }
    
    
    </>
  )
}

export default UserList