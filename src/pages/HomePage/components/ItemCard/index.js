import React from 'react';

const ItemCard = ({ img, title, price, stars }) => {
  return (
    <section className="p-[16px] rounded-[20px] bg-item-card dark:bg-dark-item-card">
      <div className="max-w-[280px] max-h-[284px] mx-auto">
        <img src={img} alt="" className="object-cover" />
      </div>
      <h2 className="text-2xl font-medium mt-[16px]">{title}</h2>
      <div className="flex justify-between mt-[16px] text-2xl font-medium">
        <p>${price}</p>
        <span className="flex justify-between items-center gap-[6px]">
          <img src="./icon/star.svg" alt="" />
          <p className="mt-[6px]">{stars}</p>
        </span>
      </div>
    </section>
  );
};

export default ItemCard;
