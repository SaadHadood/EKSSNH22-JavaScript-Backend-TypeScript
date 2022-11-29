import React, { useEffect } from 'react'
import {IUserContext, UserContext} from '../contexts/UserContext'

const UpdateForm = () => {
  
  const { user, setUser, get, update  } = React.useContext(UserContext) as IUserContext



  return (
    <form onSubmit={update} className="d-grid mb-5">
      <h3 className="display-6 mb-4">Update Product</h3>
      <input type="hidden" value={user.id} />
      <input value={user.category} onChange={(e) => setUser ({...user, category: e.target.value })} type="text" className="form-control py-2 mb-3" placeholder="Enter category..."></input>
      <input value={user.title} onChange={(e) => setUser ({...user, title: e.target.value })} type="text" className="form-control py-2 mb-3" placeholder="Enter title..."></input>
      <input value={user.image} onChange={(e) => setUser ({...user, image: e.target.value })} type="text" className="form-control py-2 mb-3" placeholder="image url..."></input>
      <input value={user.description} onChange={(e) => setUser ({...user, description: e.target.value })} type="text" className="form-control py-2 mb-3" placeholder="Enter your description..."></input>
      <input value={user.price} onChange={(e) => setUser ({...user, price: e.target.valueAsNumber })} type="number" className="form-control py-2 mb-3" placeholder="price..."></input>
      <button type="submit" className="btn btn-success py-2 mt-3">UPDATE PRODUCT</button>
    </form>
  )
}

export default UpdateForm