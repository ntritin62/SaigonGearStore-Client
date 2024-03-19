import React, { useEffect } from 'react';
import { Outlet, useFetcher } from 'react-router-dom';
import Header from './components/Header';
import { ScrollRestoration } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUserCart } from '../../redux/cartSlice';

const Layout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserCart());
  }, []);
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
