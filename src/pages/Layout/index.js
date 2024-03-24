import React, { useEffect } from 'react';
import { Outlet, useFetcher } from 'react-router-dom';
import Header from './components/Header';
import { ScrollRestoration } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUserCart } from '../../redux/cartSlice';
import { getUser } from '../../redux/userSlice';

const Layout = () => {
  return (
    <>
      <Header />
      <div className="my-[110px] lg:mt-[80px]">
        <Outlet />
      </div>
      <ScrollRestoration />
    </>
  );
};

export default Layout;
