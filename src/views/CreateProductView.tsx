import React from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import { TabTitle } from '../utilities/GeneralFunctions'
import CreateForm from '../components/CreateForm';
import UserList from '../components/UserList';
import UserProvider from '../contexts/ProductContext';
import BreadcrumbsSection from '../sections/BreadcrumbSection';


const CreateProductView: React.FC = () => {
  TabTitle ('Admin | Fixxo.');

  return (
    <UserProvider>
      <MainMenuSection />
      <BreadcrumbsSection currentPage="Create Product" />
      <div className="container mt-5">
        <CreateForm />
        <hr className="my-5" />
        <UserList />
      </div>
      <FooterSection />
    </UserProvider>
  );
}

export default CreateProductView