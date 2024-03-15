import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const CartBox = ({ path }) => {
  return (
    <div className="col-span-3 bg-white dark:bg-dark-sidebar rounded-[20px] p-[30px] h-fit">
      <div className="flex justify-between text-3xl font-medium lg:text-3xl  ">
        <p>
          Subtotal <span className="font-normal">(items)</span>
        </p>
        <p>3</p>
      </div>
      <div className="flex justify-between text-3xl font-medium mt-[10px] lg:text-3xl  ">
        <p>
          Price <span className="font-normal">(Total)</span>
        </p>
        <p>$191.65</p>
      </div>
      <div className="flex justify-between text-3xl font-medium mt-[10px] lg:text-3xl  ">
        <p>Shipping</p>
        <p>$10.00</p>
      </div>
      <div className="h-[1px] w-full dark:bg-[#B9BABE] bg-top-menu-border my-[30px]"></div>
      <div className="flex justify-between text-4xl font-bold  ">
        <p>Estimated Total</p>
        <p>$201.65</p>
      </div>
      <Link
        to={path === 'shipping' ? ROUTES.PAYMENTMETHOD : ROUTES.SHIPPING}
        className="mt-[30px] bg-[#FFB700] py-[18px] block rounded-full text-3xl font-medium w-full text-text text-center "
      >
        Continue to checkout
      </Link>
    </div>
  );
};

export default CartBox;
