import React from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import { TabTitle } from '../utilities/GeneralFunctions'


const CategoriesView: React.FC = () => {
  TabTitle('Categories | Fixxo.');

  return (
    <>
      <MainMenuSection />
      <FooterSection />
    </>
  )
}

export default CategoriesView