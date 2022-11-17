import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import ProductDetailsSection from '../sections/ProductDetailsSection'


let window: any;


const ProductDetailsView = () => {
  window.top.document.title = 'ProductDetails | Fixxo.'

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