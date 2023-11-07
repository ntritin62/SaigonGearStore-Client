import React from 'react';
import ItemCard from '../../../../components/ItemCard';

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
  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-bold sm:text-3xl sm:font-medium">
          Total LavAzza 1320
        </h2>
        <button className="flex items-center py-[6px] px-[12px] gap-[16px] rounded-[6px] bg-item-card dark:bg-dark-item-card ">
          <span className="font-medium">Filter</span>
          <img src="/icon/filter.svg" alt="" className="icon" />
        </button>
      </div>
      <ul className="mt-[30px] grid grid-cols-3 gap-[30px]">
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
