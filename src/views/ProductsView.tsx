import React, { useEffect } from 'react'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import PageProductSection from '../sections/PageProductSection'
import { TabTitle } from '../utilities/GeneralFunctions'

const ProductsView: React.FC = () => {
  TabTitle ('Products | Fixxo.');
  const {products, getAll} = useProductContext() as ProductContextType

  useEffect(() => {
    getAll()
  }, [])

  return (
    <>
      <MainMenuSection />
      <PageProductSection tittle="Products" products={products} />
      <FooterSection />
    </>
  )
}

export default ProductsView