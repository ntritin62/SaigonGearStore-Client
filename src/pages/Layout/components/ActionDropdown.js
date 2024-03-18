import React from 'react';
import * as ROUTES from '../../../constants/routes';
import { Link } from 'react-router-dom';
import { UseSelector, useSelector } from 'react-redux';

const ActionDropdown = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="absolute hidden  top-[45px]  group-hover:block dark:text-[#B9BABE] right-0 z-30 bg-white dark:bg-dark-dropdown-bg p-[30px] shadow-[0px_40px_90px_20px_rgba(200,200,200,0.40)] dark:shadow-[0px_40px_90px_20px_rgba(23,28,40,0.40)] rounded-3xl md:hidden w-[585px]">
      <div className="relative ">
        <img
          src="/icon/arrow-top.svg"
          alt=""
          className="dropdown-arrow absolute top-[-45px] right-0"
        />
        <div className="flex justify-between">
          <p className="text-3xl font-medium">
            You have {cart.productsNumber} item
          </p>
          <Link
            to={ROUTES.CART}
            className="text-3xl text-[#0071DC] font-normal"
          >
            See All
          </Link>
        </div>
        <ul className="grid grid-cols-3 my-[30px]">
          {cart.products.slice(0, 3).map((product) => {
            return (
              <li className="p-[10px]">
                <img
                  src={product.productImage}
                  alt=""
                  className="w-[175px] h-[175px] object-contain "
                />
                <p className="text-2xl font-normal mt-[14px]">
                  {product.productName}
                </p>
                <p className="text-2xl font-medium mt-[6px]">
                  ${product.price}
                </p>
              </li>
            );
          })}
        </ul>
        <div className="bg-top-menu-border dark:bg-dark-top-menu-border h-[1px] w-full"></div>
        <ul className="my-[30px] flex flex-col gap-[20px]">
          <li className="flex justify-between text-3xl font-normal">
            <p>Subtotal:</p>
            <p>${cart.totalPrice.toFixed(2)}</p>
          </li>
          <li className="flex justify-between text-3xl font-normal">
            <p>Texes:</p>
            <p>Free</p>
          </li>
          <li className="flex justify-between text-3xl font-normal">
            <p>Shipping:</p>
            <p>Free</p>
          </li>
          <li className="flex justify-between text-3xl font-medium">
            <p>Total Price:</p>
            <p>${cart.totalPrice.toFixed(2)}</p>
          </li>
        </ul>
        <div className="bg-top-menu-border dark:bg-dark-top-menu-border h-[1px] w-full"></div>
        <button className="text-text block text-3xl font-medium rounded-full bg-[#FFB700] py-[18px] px-[40px] mt-[30px] ml-auto">
          Check Out All
        </button>
      </div>
    </div>
  );
};

export default ActionDropdown;
