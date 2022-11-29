import React from 'react'
import { NavLink } from 'react-router-dom'

const ManageProductSection = () => {
  return (
    <section className="manage container">
    <div className="btn-group">
        <NavLink to="/createproduct" end><button><h1>Create Product</h1></button></NavLink>
        <NavLink to="/updateproduct" end><button><h1>Update Product</h1></button></NavLink>
    </div>
    </section>
  )
}

export default ManageProductSection