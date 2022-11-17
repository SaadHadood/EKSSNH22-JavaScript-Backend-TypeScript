import React from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import { TabTitle } from '../utilities/GeneralFunctions'


const FlasheSaleView: React.FC = () => {
  TabTitle ('FlasheSale | Fixxo.');

  return (
    <>
      <MainMenuSection />
      <FooterSection />
    </>
  )
}

export default FlasheSaleView