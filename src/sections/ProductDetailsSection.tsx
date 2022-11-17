import React from 'react'

function ProductDetailsSection ({product}: { product: React.FC | any }) {
    return (

      <section className="details">
        <div className="container">
            <h1>{product.name}</h1>
            <p>${product.price}</p>
            <div className="details-img">
              <img src={product.imageName} />
            </div>
        </div>
      </section>
    )
  }

export default ProductDetailsSection