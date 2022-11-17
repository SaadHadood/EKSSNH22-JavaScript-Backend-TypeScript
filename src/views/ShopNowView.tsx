import React from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import { TabTitle } from '../utilities/GeneralFunctions';


const ShopNowView: React.FC = () => {
  TabTitle ('ShopNow | Fixxo.');

  return (
    <>
      <MainMenuSection />
      <FooterSection />
    </>
  )
}

export default ShopNowView