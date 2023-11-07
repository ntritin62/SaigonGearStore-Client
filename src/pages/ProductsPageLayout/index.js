import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';

const ProductsPageLayout = () => {
  return (
    <div className="container flex gap-[30px] mt-[30px] md:flex-col md:gap-[20px]">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default ProductsPageLayout;
