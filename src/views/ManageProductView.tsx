import React from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ManageProductSection from '../sections/ManageProductSection'
import { TabTitle } from '../utilities/GeneralFunctions'


const ManageProductView: React.FC = () => {
  TabTitle ('Admin | Fixxo.');

  return (
    <>
      <MainMenuSection />
      <ManageProductSection />
      <FooterSection />
    </>
  )
}

export default ManageProductView