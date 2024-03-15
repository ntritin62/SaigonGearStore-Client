import { useState } from 'react';
import React from 'react';
import ImageSlider from './components/ImageSlider';

const ProductDetail = () => {
  const [size, setSize] = useState('');
  const sizeHandler = (e) => {
    setSize(e.target.value);
  };
  return (
    <div className="container mt-[60px]">
      <div className="grid grid-cols-12 lg:flex lg:flex-col gap-[30px]">
        <figure className="col-span-4  flex flex-col items-center gap-[20px]">
          <ImageSlider />
        </figure>
        <section className="col-span-8 bg-white dark:bg-dark-header-bg p-[60px] md:p-[16px]">
          <h1 className="text-4xl font-medium">
            Coffee Beans - Espresso Arabica and Robusta Beans
          </h1>
          <div className="flex gap-[60px] mt-[30px] sm:flex-col">
            <div>
              <div className="mt-[30px]">
                <p className="text-4xl font-medium">Size</p>
                <div className="flex gap-[20px] mt-[20px]">
                  <input
                    type="radio"
                    name="size"
                    id="small"
                    value="small"
                    hidden
                    onChange={sizeHandler}
                  />
                  <label
                    htmlFor="small"
                    className={`bg-top-act-group-shadow px-[12px] py-[6px] rounded-[6px] text-[#9E9DA8] cursor-pointer dark:bg-dark-top-act-group-shadow font-medium ${
                      size === 'small' ? 'text-text dark:text-dark-text' : ''
                    }`}
                  >
                    Small
                  </label>
                  <input
                    type="radio"
                    name="size"
                    id="medium"
                    value="medium"
                    hidden
                    onChange={sizeHandler}
                  />
                  <label
                    htmlFor="medium"
                    className={`bg-top-act-group-shadow px-[12px] py-[6px] rounded-[6px] text-[#9E9DA8] cursor-pointer dark:bg-dark-top-act-group-shadow font-medium ${
                      size === 'medium' ? 'text-text dark:text-dark-text' : ''
                    }`}
                  >
                    Medium
                  </label>
                  <input
                    type="radio"
                    name="size"
                    id="large"
                    value="large"
                    hidden
                    onChange={sizeHandler}
                  />
                  <label
                    htmlFor="large"
                    className={`bg-top-act-group-shadow px-[12px] py-[6px] rounded-[6px] text-[#9E9DA8] cursor-pointer dark:bg-dark-top-act-group-shadow font-medium ${
                      size === 'large' ? 'text-text dark:text-dark-text' : ''
                    }`}
                  >
                    Large
                  </label>
                </div>
              </div>
            </div>

            <ul className="flex flex-col gap-[27px] grow">
              <li className="flex gap-x-[20px]">
                <img src="/icon/document.svg" alt="" className="icon" />
                <p className="text-2xl font-medium">Compare</p>
              </li>
              <li className="flex gap-x-[20px]">
                <img src="/icon/cart.svg" alt="" className="icon" />
                <span>
                  <p className="text-2xl font-medium">Delivery</p>
                  <p className=" ">From $6 for 1-3 days</p>
                </span>
              </li>
              <li className="flex gap-[20px]">
                <img src="/icon/bag.svg" alt="" className="icon" />
                <span>
                  <p className="text-2xl font-medium">Pickup</p>
                  <p>Out of 2 store, today</p>
                </span>
              </li>
              <li className="p-[20px] border-[1px] border-solid border-[#B9BABE] rounded-md mx-auto">
                <span className="flex items-center gap-[10px]">
                  <p className="text-2xl font-medium">$500.00</p>
                  <p className="text-2xl text-[#67B044] py-[2px] px-[8px] bg-[#e0eeda]">
                    10%
                  </p>
                </span>
                <p className="text-4xl font-medium mt-[20px]">$540.00</p>
                <div className="mt-[20px] flex gap-[20px]">
                  <button className="text-3xl font-medium rounded-md bg-[#FFB700] px-[50px] py-[10px]">
                    Add to cart
                  </button>
                  <button className="border-[1px] border-solid border-[#B9BABE] p-[11px] rounded-md">
                    <img src="/icon/heart.svg" alt="" className="icon" />
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
