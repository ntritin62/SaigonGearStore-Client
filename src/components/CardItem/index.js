import React from 'react';

const CardItem = () => {
  return (
    <div>
      <li className="flex gap-[30px] items-center">
        <figure className="w-[175px] h-[175px] sm:w-[60px] sm:h-[60px]">
          <img
            src="/image/cafe-i1.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </figure>
        <section className="w-full flex flex-col gap-[16px]">
          <div className="flex justify-between shrink-0 sm:flex-col sm:gap-[10px] ">
            <h2 className="w-[374px] text-3xl font-medium sm:text-xl sm:w-full ">
              Coffee Beans - Espresso Arabica and Robusta Beans
            </h2>
            <p className="text-4xl font-bold">$47.00</p>
          </div>
          <div className="text-checkout-text font-medium">
            $47.00 | <span className="text-[#67B044]">In Stock</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-[10px] px-[20px] py-[10px] border-solid border-[1px] border-top-menu-border rounded-[10px] dark:border-dark-profile-text">
              <button className="w-[20px] h-[20px]">
                <img
                  src="/icon/miner.svg"
                  alt=""
                  className="dark-icon w-full h-full"
                />
              </button>
              <span className="font-medium text-2xl">1</span>
              <button className="w-[20px] h-[20px]">
                <img
                  src="/icon/plus.svg"
                  alt=""
                  className="dark-icon w-full h-full"
                />
              </button>
            </div>
            <button className="flex gap-[10px]">
              <img
                src="/icon/trash-can.svg"
                alt=""
                className="dark-icon w-[20px] h-[20px]"
              />
              <p>Delete</p>
            </button>
          </div>
        </section>
      </li>
    </div>
  );
};

export default CardItem;
