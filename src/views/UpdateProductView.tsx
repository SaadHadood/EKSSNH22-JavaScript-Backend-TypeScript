import React from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import { TabTitle } from '../utilities/GeneralFunctions'
import UserList from '../components/UserList';
import UserProvider from '../contexts/UserContext';
import UpdateForm from '../components/UpdateForm';
import BreadcrumbsSection from '../sections/BreadcrumbSection';


const UpdateProductView: React.FC = () => {
  TabTitle ('Admin | Fixxo.');

  return (
    <UserProvider>
      <MainMenuSection />
      <BreadcrumbsSection currentPage="Update Product" />
      <div className="container mt-5">
        <UpdateForm />
        <hr className="my-5" />
        <UserList />
      </div>
      <FooterSection />
    </UserProvider>
  );
}

export default UpdateProductView