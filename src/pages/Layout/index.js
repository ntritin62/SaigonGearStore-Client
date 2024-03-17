import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
const Layout = () => {
  return (
    <>
      <Header />
      <div className="mt-[110px] lg:mt-[80px]">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
