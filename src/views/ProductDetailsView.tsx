import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductDetailsSection from '../sections/ProductDetailsSection'
import { TabTitle } from '../utilities/GeneralFunctions'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'
import BreadcrumbsSection from '../sections/BreadcrumbSection'


const ProductDetailsView: React.FC = () => {
  TabTitle ('ProductDetails | Fixxo.');

  const {id} = useParams<string>()
  const productContext = useProductContext() as ProductContextType

  useEffect(() => {
    productContext.get(id)
}, [])



  return (
    <>
        <MainMenuSection />
        <BreadcrumbsSection currentPage={productContext.product.name} />
        <ProductDetailsSection product={productContext.product} />
        <FooterSection />
    </>
  )
}

export default ProductDetailsView