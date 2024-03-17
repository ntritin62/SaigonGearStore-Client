import React from 'react';
import { Link } from 'react-router-dom';

const ItemCard = ({ id, img, title, price, stars, isLiked }) => {
  return (
    <Link to={`/product/${id}`}>
      <section className="p-[16px] rounded-[20px] bg-item-card dark:bg-dark-item-card shadow-[0px_20px_60px_10px_rgba(237,237,246,0.20)] dark:shadow-[0px_20px_60px_10px_rgba(0,0,0,0.20)]">
        <div className="relative max-w-[280px] max-h-[284px] mx-auto">
          <img src={img} alt="" className="object-cover" />
          <span className="absolute w-[50px] h-[50px] right-0 bottom-0 flex items-center justify-center bg-item-card dark:bg-dark-body-bg rounded-[50%] drop-shadow-md">
            {isLiked ? (
              <img src="/icon/red-heart.svg" alt="" className="mt-[8px]" />
            ) : (
              <img src="/icon/heart.svg" alt="" className="icon" />
            )}
          </span>
        </div>
        <h2 className="text-2xl font-medium mt-[16px]">{title}</h2>
        <div className="flex justify-between mt-[16px] text-2xl font-medium">
          <p>${price}</p>
          <span className="flex justify-between items-center gap-[6px]">
            <img src="/icon/star.svg" alt="" />
            <p className="mt-[6px]">{stars}</p>
          </span>
        </div>
      </section>
    </Link>
  );
};

export default ItemCard;
