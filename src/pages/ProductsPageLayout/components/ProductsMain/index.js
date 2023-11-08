import React, { useState } from 'react';

import ItemCard from '../../../../components/ItemCard';
import Filter from './Filter';

const coffees = [
  {
    img: '/image/cafe-i1.png',
    title: 'Coffee Beans - Espresso Arabica and Robusta Beans',
    price: '47.00',
    stars: '4.3',
  },
  {
    img: '/image/cafe-i2.png',
    title: 'Coffee Beans - Espresso Arabica and Robusta Beans',
    price: '47.00',
    stars: '4.3',
  },
  {
    img: '/image/cafe-i3.png',
    title: 'Coffee Beans - Espresso Arabica and Robusta Beans',
    price: '47.00',
    stars: '4.3',
  },
  {
    img: '/image/cafe-i4.png',
    title: 'Coffee Beans - Espresso Arabica and Robusta Beans',
    price: '47.00',
    stars: '4.3',
  },
];
const ProductsMain = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(200);
  const updateMinPrice = (e) => {
    if (+e.target.value > +maxPrice) {
      return;
    }
    setMinPrice(e.target.value);
  };
  const updateMaxPrice = (e) => {
    if (+e.target.value < +minPrice) {
      return;
    }
    setMaxPrice(e.target.value);
  };
  return (
    <div className="w-full">
      <div className="flex justify-between items-center relative">
        <h2 className="text-4xl font-bold sm:text-3xl sm:font-medium">
          Total LavAzza 1320
        </h2>
        <button className="flex items-center py-[6px] px-[12px] gap-[16px] rounded-[6px] bg-item-card dark:bg-dark-item-card ">
          <span className="font-medium">Filter</span>
          <img src="/icon/filter.svg" alt="" className="icon" />
        </button>
        <div className="absolute p-[30px] top-[66px] right-0 rounded-3xl bg-dropdown dark:bg-dark-dropdown-bg z-30 drop-shadow-xl">
          <h2 className="text-4xl font-medium">Filter</h2>
          <div className="grid grid-cols-2 mt-[30px] ">
            <div className="flex flex-col pr-[30px] gap-[20px]">
              <h3 className="text-4xl font-medium ">Price</h3>
              <div className="flex items-center">
                <Filter
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                  updateMinPrice={updateMinPrice}
                  updateMaxPrice={updateMaxPrice}
                />
              </div>
              <div className="flex justify-between">
                <div>
                  <p>Minimum</p>
                  <p className="px-[12px] py-[8px] border-2 border-solid border-top-menu-border rounded-[6px] w-[121px]">
                    ${minPrice}
                  </p>
                </div>
                <div>
                  <p>Maximum</p>
                  <p className="px-[12px] py-[8px] border-2 border-solid border-top-menu-border rounded-[6px] w-[121px]">
                    ${maxPrice}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[1px] h-full bg-top-act-group-separate "></div>
          </div>
        </div>
      </div>
      <ul className="mt-[30px] grid grid-cols-3 gap-[30px] md:grid-cols-2 sm:grid-cols-1">
        {coffees.map((coffee) => (
          <li>
            <a href="#!">
              <ItemCard
                isLiked={false}
                img={coffee.img}
                title={coffee.title}
                price={coffee.price}
                stars={coffee.stars}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsMain;
