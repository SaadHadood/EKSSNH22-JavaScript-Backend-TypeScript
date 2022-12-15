import React from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import { TabTitle } from '../utilities/GeneralFunctions'
import UserProvider from '../contexts/ProductContext';
import BreadcrumbsSection from '../sections/BreadcrumbSection';
import DeleteForm from '../components/DeleteForm';


const DeleteProductView: React.FC = () => {
  TabTitle ('Admin | Fixxo.');

  return (
    <UserProvider>
      <MainMenuSection />
      <BreadcrumbsSection currentPage="Delete Product" />
      <div className="container mt-5">
        <DeleteForm />
        <hr className="my-5" />
      </div>
      <FooterSection />
    </UserProvider>
  );
}

export default DeleteProductView