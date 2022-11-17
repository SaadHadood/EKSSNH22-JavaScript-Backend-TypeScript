import React from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'

let window: any;

const FlasheSaleView = () => {
  window.top.document.title = 'FlasheSale | Fixxo.'

  return (
    <>
      <MainMenuSection />
      <FooterSection />
    </>
  )
}

export default FlasheSaleView