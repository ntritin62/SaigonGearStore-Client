import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { ScrollRestoration } from 'react-router-dom';
const Layout = () => {
  return (
    <>
      <Header />
      <div className="mt-[110px] lg:mt-[80px]">
        <Outlet />
      </div>
      <ScrollRestoration />
    </>
  );
};

export default Layout;
