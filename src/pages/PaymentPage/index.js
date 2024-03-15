import React from 'react';
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';
import PaymentCard from '../../components/PaymentCard';

const PaymentPage = () => {
  return (
    <>
      <div className="container ">
        <div className="flex text-checkout-text text-2xl font-medium gap-[20px] mt-[30px] rounded-[10px] bg-white p-[20px] dark:bg-dark-sidebar">
          <p>Home</p>
          <img src="/icon/arrow-right.svg" alt="" />
          <p>checkout</p>
          <img src="/icon/arrow-right.svg" alt="" />
          <p>Shipping</p>
          <img src="/icon/arrow-right.svg" alt="" />
          <p className="text-text dark:text-dark-text">Payment method</p>
        </div>
      </div>
      <div className="container grid grid-cols-11 xl:flex xl:flex-col my-[30px] gap-[30px] dark:text-checkout-text">
        <div className="col-span-8">
          <div className="p-[30px] rounded-[20px] bg-white dark:bg-dark-sidebar">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-medium">
                1. Shipping, arrives between Mon, May 16—Tue, May 24
              </h2>
              <Link to={ROUTES.SHIPPING}>
                <button className="flex gap-[10px] mt-auto mr-[15px]">
                  <img src="/icon/edit.svg" alt="" className="dark-icon" />
                  <span>Edit</span>
                </button>
              </Link>
            </div>
            <div className="my-[30px] bg-body-bg dark:bg-dark-body-bg p-[20px] rounded-[20px] flex justify-between items-center">
              <div>
                <p className="text-2xl font-medium mb-[4px]">Imran Khan</p>
                <p>Museum of Rajas, Sylhet Sadar, Sylhet 3100.</p>
              </div>
              <div className="w-[31px] h-[31px]">
                <img src="/icon/check.svg" alt="" className="w-full h-full" />
              </div>
            </div>
            <div className="my-[30px] bg-body-bg dark:bg-dark-body-bg p-[20px] rounded-[20px] flex justify-between items-center">
              <div>
                <p className="text-2xl font-medium mb-[4px]">Items details</p>
                <p>2 items</p>
              </div>
              <Link
                to={ROUTES.SHIPPING}
                className="underline underline-offset-5"
              >
                View details
              </Link>
            </div>
          </div>
          <div className="p-[30px] rounded-[20px] bg-white dark:bg-dark-sidebar mt-[30px]">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-medium">2. Shipping method</h2>
            </div>
            <div className="w-full h-[1px] my-[30px] bg-top-menu-border dark-bg-dark-body-bg"></div>
            <h3 className="text-2xl font-medium">Available Shipping method</h3>
            <div className="my-[30px] bg-body-bg dark:bg-dark-body-bg p-[20px] rounded-[20px] flex justify-between items-center">
              <div className="flex items-center gap-[20px]">
                <div className="w-[70px] h-[54px] rounded-[10px] overflow-hidden">
                  <img
                    src="/image/fedex.png"
                    alt=""
                    className="w-full h-full object-cover "
                  />
                </div>
                <div>
                  <p className="text-2xl font-medium mb-[4px]">
                    Fedex Delivery
                  </p>
                  <p>Delivery: now</p>
                </div>
              </div>
              <div className="flex gap-[14px] items-center">
                <p>Free</p>
                <div className="w-[19px] h-[19px]">
                  <img src="/icon/check.svg" alt="" className="w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 p-[30px] rounded-[20px] bg-white dark:bg-dark-sidebar">
          <PaymentCard />
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
