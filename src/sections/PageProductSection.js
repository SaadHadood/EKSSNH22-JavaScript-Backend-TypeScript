import React from 'react'
import ProductCard from '../components/ProductCard'


const PageProductSection = ({tittle, products}) => {
    return (
      <section className="product-grid">
          <div className="container">
              <div className="section-title">
                  <h1>{tittle}</h1>
              </div>
              <div className="row row-cols-1 row-cols-md-4 g-4">
                  {
                    products.map(product => <ProductCard key={product.id} product={product} />)
                  }
              </div>    
          </div>
      </section>
    )
  }

export default PageProductSection