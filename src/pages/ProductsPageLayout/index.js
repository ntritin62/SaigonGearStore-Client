import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Sidebar from './components/Sidebar';

const ProductsPageLayout = () => {
  const brands = useLoaderData();
  return (
    <div className="container flex gap-[30px] mt-[30px] md:flex-col md:gap-[20px]">
      <Sidebar brands={brands} />
      <Outlet />
    </div>
  );
};

export default ProductsPageLayout;
