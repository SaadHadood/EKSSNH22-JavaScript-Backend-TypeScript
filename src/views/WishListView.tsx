import React from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import { TabTitle } from '../utilities/GeneralFunctions'


const WishListView: React.FC = () => {
  TabTitle ('WishList | Fixxo.');

  return (
    <>
      <MainMenuSection />
      <FooterSection />
    </>
  )
}

export default WishListView