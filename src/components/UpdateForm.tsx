import React, { useEffect } from 'react'
import {ProductContextType, ProductContext} from '../contexts/ProductContext'
import { useParams } from 'react-router-dom'


const UpdateForm = () => {
  const {id} = useParams()
  const idNumber = id as unknown as number

  
const { product, setProduct, get, update } = React.useContext(ProductContext) as ProductContextType

useEffect(() => {
  get(idNumber)
},[idNumber])


  return (
    <form onSubmit={update} className="d-grid mb-5">
      <h3 className="display-6 mb-4">Update Product</h3>
      <input type="text" value={product.id} />
      <input value={product.category} onChange={(e) => setProduct ({...product, category: e.target.value })} type="text" className="form-control py-2 mb-3" placeholder="Enter category..."></input>
      <input value={product.name} onChange={(e) => setProduct ({...product, name: e.target.value })} type="text" className="form-control py-2 mb-3" placeholder="Enter title..."></input>
      <input value={product.imageName} onChange={(e) => setProduct ({...product, imageName: e.target.value })} type="text" className="form-control py-2 mb-3" placeholder="image url..."></input>
      <input value={product.price} onChange={(e) => setProduct ({...product, price: e.target.valueAsNumber })} type="number" className="form-control py-2 mb-3" placeholder="price..."></input>
      <button type="submit" className="btn btn-success py-2 mt-3">UPDATE PRODUCT</button>
    </form>
  )
}

export default UpdateForm