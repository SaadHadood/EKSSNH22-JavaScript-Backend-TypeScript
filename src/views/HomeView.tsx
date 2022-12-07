import React, { useEffect } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ShowCase from '../sections/ShowCase'
import ProductGridSection from '../sections/ProductGridSection'
import TopPicks from '../sections/TopPicks'
import Discount from '../sections/Discount'
import SecondDiscount from '../sections/SecondDiscount'
import SupportSection from '../sections/SupportSection'
import { ProductContext } from '../contexts/contexts'
import { TabTitle } from '../utilities/GeneralFunctions'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'



const HomeView: React.FC = () => {
  TabTitle('Fixxo.')

    const { featured, getFeatured } = useProductContext() as ProductContextType

    useEffect(() => {
      getFeatured(8)
    }, [])

    const { discount, getDiscount } = useProductContext() as ProductContextType

    useEffect(() => {
      getDiscount(4)
    }, [])

    const { discount2, getDiscount2 } = useProductContext() as ProductContextType

    useEffect(() => {
      getDiscount2(4)
    }, [])


  return (
    <>
      <header>
      <MainMenuSection />
      <ShowCase />
      </header>
      <ProductGridSection tittle="Featured Products" items={featured} />
      <TopPicks />
      <Discount tittle="Featured Products" products={discount} />
      <SecondDiscount tittle="Featured Products" products={discount2} />
      <SupportSection />
      <FooterSection />
    </>
  )
}

export default HomeView