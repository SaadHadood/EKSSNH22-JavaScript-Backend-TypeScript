import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import ProductDetailsSection from '../sections/ProductDetailsSection'
import { TabTitle } from '../utilities/GeneralFunctions'


const ProductDetailsView: React.FC = () => {
  TabTitle ('ProductDetails | Fixxo.');

  const {id} = useParams()
  const [product, setProduct] = useState({})

  useEffect(() => {
    const fetchData = async () => {
        const result = await fetch(`https://win22-webapi.azurewebsites.net/api/products/${id}`)
        setProduct(await result.json())
    }
    fetchData()
}, [])



  return (
    <>
        <MainMenuSection />
        <ProductDetailsSection product={product} />
        <FooterSection />
    </>
  )
}

export default ProductDetailsView