import React, { useContext, useState } from 'react'
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



const HomeView: React.FC = () => {
  TabTitle('Fixxo.')

  const [featuredProducts, setFeaturedProducts] = useState ([
    {id: 1, name: "Modern Black Blouse", category: "Fashion", price: "35.00", rating: 5, img: "https://images.pexels.com/photos/4946413/pexels-photo-4946413.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    {id: 2, name: "Modern Black Blouse", category: "Fashion", price: "35.00", rating: 5, img: "https://images.pexels.com/photos/13914030/pexels-photo-13914030.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
    {id: 3, name: "Modern Black Blouse", category: "Fashion", price: "35.00", rating: 5, img: "https://images.pexels.com/photos/13914029/pexels-photo-13914029.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
    {id: 4, name: "Modern Black Blouse", category: "Fashion", price: "35.00", rating: 5, img: "https://images.pexels.com/photos/13914028/pexels-photo-13914028.jpeg?auto=compress&cs=tinysrgb&w=1600" }
  ])

  const productContext = useContext(ProductContext)
  return (
    <>
      <header>
      <MainMenuSection />
      <ShowCase />
      </header>
      <ProductGridSection tittle="Featured Products" items={productContext.featuredProducts} />
      <TopPicks />
      <Discount tittle="Featured Products" products={featuredProducts} />
      <SecondDiscount tittle="Featured Products" products={featuredProducts} />
      <SupportSection />
      <FooterSection />
    </>
  )
}

export default HomeView