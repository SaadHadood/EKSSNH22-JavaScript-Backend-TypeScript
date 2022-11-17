import React from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import { TabTitle } from '../utilities/GeneralFunctions'


const CompareView: React.FC = () => {
  TabTitle ('Compare | Fixxo.');

  return (
    <>
      <MainMenuSection />
      <FooterSection />
    </>
  )
}

export default CompareView