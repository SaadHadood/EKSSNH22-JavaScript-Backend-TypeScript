import React from 'react'
import ProductCard from '../components/ProductCard'
import { item } from '../models/item'


interface Props {
  tittle: string
  items: []
}

const ProductGridSection: React.FC<Props> = ({tittle, items = []}) => {
  return (
    <section className="product-grid">
        <div className="container">
            <div className="section-title">
                <h1>{tittle}</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                  items.map( (product: item) => <ProductCard key={product.articleNumber} product={product} />)
                }
            </div>    
        </div>
    </section>
  )
}

export default ProductGridSection