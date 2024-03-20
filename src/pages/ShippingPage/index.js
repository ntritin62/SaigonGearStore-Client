import React from 'react';
import CardItem from '../../components/CardItem';
import { Link } from 'react-router-dom';
import CartBox from '../../components/Cart';
import { useState } from 'react';
import { UseSelector, useSelector } from 'react-redux';

const ShippingPage = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const cart = useSelector((state) => state.cart);

  const handleInputChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(selectedOption);
  };

  const radioOptions = [
    { id: '1', label: 'Option 1' },
    { id: '2', label: 'Option 2' },
    { id: '3', label: 'Option 3' },
  ];
  return (
    <>
      <div className="container pt-[10px]">
        <div className="flex text-checkout-text text-2xl font-medium gap-[20px] mt-[30px] rounded-[10px] bg-white p-[20px] dark:bg-dark-sidebar">
          <p>Home</p>
          <img src="/icon/arrow-right.svg" alt="" />
          <p>checkout</p>
          <img src="/icon/arrow-right.svg" alt="" />
          <p className="text-text dark:text-dark-text">Shipping</p>
        </div>
      </div>
      <div className="container grid grid-cols-11 xl:flex xl:flex-col my-[30px] gap-[30px] dark:text-checkout-text">
        <div className="col-span-8 p-[30px] rounded-[20px] bg-white dark:bg-dark-sidebar">
          <div className="flex flex-col gap-[30px]">
            <div className="flex items-center justify-between sm:flex-col sm:gap-[16px] sm:items-start">
              <div>
                <h2 className="text-3xl font-medium">Shipping address</h2>
                <p className="text-2xl">Where should we deliver your order?</p>
              </div>
              <button className="flex gap-[10px] py-[10px] px-[20px] bg-[#FFB700] text-3xl font-medium rounded-full sm:mx-auto text-text">
                <img
                  src="/icon/plus.svg"
                  alt=""
                  className=" w-[20px] h-[20px] "
                />
                Add a new address
              </button>
            </div>
            <ul className="max-h-[200px] overflow-y-auto flex flex-col gap-[30px]">
              {radioOptions.map((option) => (
                <li className="flex justify-between sm:flex-col sm:gap-[16px]">
                  <div className="flex gap-[16px]">
                    <input
                      type="radio"
                      name="address"
                      id={option.id}
                      value={option.id}
                      checked={selectedOption === option.id}
                      onChange={handleInputChange}
                      hidden
                    />
                    <label
                      htmlFor={option.id}
                      className="w-[19px] h-[19px] shrink-0 "
                    >
                      {selectedOption === option.id ? (
                        <img
                          src="/icon/check.svg"
                          alt=""
                          className="w-full h-full"
                        />
                      ) : (
                        <div className="w-full h-full border-solid border-[1.5px] rounded-lg border-[#1A162E] dark:border-[#B9BABE] "></div>
                      )}
                    </label>
                    <div>
                      <p className="text-3xl font-medium sm:text-2xl">
                        Imran Khan
                      </p>
                      <p className="text-2xl sm:text-xl">
                        Al Hamra City (10th Floor), Hazrat Shahjalal Road,
                        Sylhet, Sylhet, Bangladesh
                      </p>
                      <ul className="list-disc flex gap-[30px] mt-[20px] sm:text-xl ml-[15px]">
                        <li>Shipping</li>
                        <li>Delivery from store</li>
                      </ul>
                    </div>
                  </div>
                  <button className="flex gap-[10px] mt-auto mr-[15px]">
                    <img src="/icon/edit.svg" alt="" className="dark-icon" />
                    <span>Edit</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <h2 className="text-3xl font-medium mt-[30px]">Items details</h2>
          <ul className="flex flex-col gap-[30px] mt-[30px]">
            {cart.products.map((product) => (
              <>
                <CardItem product={product} />
                <div className="h-[1px] w-full dark:bg-[#B9BABE] bg-top-menu-border"></div>
              </>
            ))}
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
                <p>$191.65</p>
              </div>
              <div className="flex justify-between text-3xl font-medium mt-[10px]">
                <p>Shipping:</p>
                <p>$10:00</p>
              </div>
              <div className="h-[1px] w-full dark:bg-[#B9BABE] bg-top-menu-border my-[30px]"></div>
              <div className="flex justify-between text-4xl font-bold">
                <p>Total:</p>
                <p>$201.65</p>
              </div>
            </div>
          </div>
        </div>
        <CartBox path="shipping" />
      </div>
    </>
  );
};

export default ShippingPage;
