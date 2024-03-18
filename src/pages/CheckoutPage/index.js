import React from 'react';
import CardItem from '../../components/CardItem';
import { Link } from 'react-router-dom';
import CartBox from '../../components/Cart';
import { useSelector } from 'react-redux';

const CheckoutPage = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <div className="container pt-[10px]">
        <div className="flex text-checkout-text text-2xl font-medium gap-[20px] mt-[30px] rounded-[10px] bg-white p-[20px] dark:bg-dark-sidebar">
          <p>Home</p>
          <img src="/icon/arrow-right.svg" alt="" />
          <p className="text-text dark:text-dark-text">checkout</p>
        </div>
      </div>
      <div className="container grid grid-cols-11 xl:flex xl:flex-col my-[30px] gap-[30px] dark:text-checkout-text">
        <div className="col-span-8 p-[30px] rounded-[20px] bg-white dark:bg-dark-sidebar">
          <ul className="flex flex-col gap-[30px]">
            {cart.products.map((product) => {
              return (
                <>
                  <CardItem product={product} />
                  <div className="h-[1px] w-full dark:bg-[#B9BABE] bg-top-menu-border"></div>
                </>
              );
            })}
          </ul>
          <div className="flex mt-[30px] items-end justify-between sm:hidden">
            <Link className="flex gap-[10px] items-center">
              <img
                src="/icon/arrow-left.svg"
                alt=""
                className="dark-icon w-[24px] h-[24px]"
              />
              <p className="text-3xl font-medium">Continue Shopping</p>
            </Link>
            <div className="w-[283px]">
              <div className="flex justify-between text-3xl font-medium">
                <p>Subtotal:</p>
                <p>${cart.totalPrice.toFixed(2)}</p>
              </div>
              <div className="flex justify-between text-3xl font-medium mt-[10px]">
                <p>Shipping:</p>
                <p>Free</p>
              </div>
              <div className="h-[1px] w-full dark:bg-[#B9BABE] bg-top-menu-border my-[30px]"></div>
              <div className="flex justify-between text-4xl font-bold">
                <p>Total:</p>
                <p>${cart.totalPrice.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
        <CartBox />
      </div>
    </>
  );
};

export default CheckoutPage;
