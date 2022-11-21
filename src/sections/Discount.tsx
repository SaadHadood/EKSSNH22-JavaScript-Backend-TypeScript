import React from 'react'
import { NavLink } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { item } from '../models/item';

function Discount ({tittle, products}: {tittle: string; products: {} | any } ) {

  return (

    <section className="discount">
        <div className="container">
            <div className="box">
                <div className="box-body">
                    <h1>2 FOR USD $29</h1>
                    <NavLink className="btn btn-lg btn-white" to="/flashesale" end>FLASE SALE</NavLink>
                </div>
            </div>

            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                  products.map((product: item) => <ProductCard key={product.id} product={product} />)
                }
            </div> 

        </div>
    </section>

  )
}

export default Discount