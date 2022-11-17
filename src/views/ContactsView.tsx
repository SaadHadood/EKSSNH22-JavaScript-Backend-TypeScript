import React from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbsSection from '../sections/BreadcrumbSection'
import MapSection from '../sections/MapSection'
import ContactFormSection from '../sections/ContactFormSection'
import { TabTitle } from '../utilities/GeneralFunctions'


const ContactsView: React.FC = () => {
  TabTitle ('Contacts | Fixxo.');

  return (
    <>
      <MainMenuSection />
      <BreadcrumbsSection currentPage="Contacts" />
      <MapSection />
      <ContactFormSection />
      <FooterSection />
    </>
  )
}

export default ContactsView