import React, { useEffect } from 'react'
import {ProductContextType, ProductContext} from '../contexts/ProductContext'
import { useParams } from 'react-router-dom'


const UpdateForm = () => {
const [title, setTitle] = React.useState('');
const params = useParams();
  
const { user, setUser, get, update } = React.useContext(ProductContext) as ProductContextType

useEffect(()=> {
  getProductDetails();
},[])

const getProductDetails = async () => {
  let result = await fetch(`http://localhost:5000/api/users/${params.id}`);
  result = await result.json()
  console.warn(result)
  /* setTitle(result.title); */
}



  return (
    <form onSubmit={update} className="d-grid mb-5">
      <h3 className="display-6 mb-4">Update Product</h3>
      <input type="hidden" value={user.id} />
      <input value={user.category} onChange={(e) => setUser ({...user, category: e.target.value })} type="text" className="form-control py-2 mb-3" placeholder="Enter category..."></input>
      <input value={user.name} onChange={(e) => setUser ({...user, name: e.target.value })} type="text" className="form-control py-2 mb-3" placeholder="Enter title..."></input>
      <input value={user.imageName} onChange={(e) => setUser ({...user, imageName: e.target.value })} type="text" className="form-control py-2 mb-3" placeholder="image url..."></input>
      <input value={user.price} onChange={(e) => setUser ({...user, price: e.target.valueAsNumber })} type="number" className="form-control py-2 mb-3" placeholder="price..."></input>
      <button type="submit" className="btn btn-success py-2 mt-3">UPDATE PRODUCT</button>
    </form>
  )
}

export default UpdateForm