import React from 'react'
import {IUserContext, UserContext} from '../contexts/UserContext'

const CreateForm = () => {
  const { userRequest, setUserRequest, create  } = React.useContext(UserContext) as IUserContext


  return (
    <form onSubmit={create} className="d-grid mb-5 createform">
      <h3 className="display-6 mb-4">Create Product</h3>
      <select value={userRequest.category} onChange={(e) => setUserRequest ({...userRequest, category: e.target.value })} className="form-control py-2 mb-3" placeholder="Enter category...">
        <option defaultValue="">Enter category...</option>
        <option value="Tops">Tops</option>
        <option value="Coats">Coats</option>
        <option value="Basic">Basic</option>
        <option value="Sets">Sets</option>
        <option value="T-shirt">T-shirt</option>
        <option value="Shoes">Shoes</option>
        <option value="Jeans">Jeans</option>
        <option value="Bags">Bags</option>
        <option value="Dresses">Dresses</option>
        <option value="Jackets">Jackets</option>
        <option value="Watches">Watches</option>
        <option value="Fashion">Fashion</option>
        <option value="Sweaters">Sweaters</option>
        <option value="Pants">Pants</option>
      </select>

      <input value={userRequest.title} onChange={(e) => setUserRequest ({...userRequest, title: e.target.value })} type="text" className="form-control py-2 mb-3" placeholder="Enter title..."></input>
      <input value={userRequest.image} onChange={(e) => setUserRequest ({...userRequest, image: e.target.value })} type="url" className="form-control py-2 mb-3" placeholder="image url..."></input>
      <input value={userRequest.description} onChange={(e) => setUserRequest ({...userRequest, description: e.target.value })} type="text" autoComplete="true" className="form-control py-2 mb-3" placeholder="Enter description..."></input>
      <input value={userRequest.price} onChange={(e) => setUserRequest ({...userRequest, price: e.target.valueAsNumber })} type="number" className="form-control py-2 mb-3" placeholder="price..."></input>
      <button type="submit" className="container btn btn-success py-2 mt-3">CREATE PRODUCT</button>
    </form>
  )
}

export default CreateForm