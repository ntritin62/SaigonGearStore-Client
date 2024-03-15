import React from 'react';

const PaymentPage = () => {
  return (
    <>
      <div className="container ">
        <div className="flex text-checkout-text text-2xl font-medium gap-[20px] mt-[30px] rounded-[10px] bg-white p-[20px] dark:bg-dark-sidebar">
          <p>Home</p>
          <img src="/icon/arrow-right.svg" alt="" />
          <p>checkout</p>
          <img src="/icon/arrow-right.svg" alt="" />
          <p>Shipping</p>
          <img src="/icon/arrow-right.svg" alt="" />
          <p className="text-text dark:text-dark-text">Payment method</p>
        </div>
      </div>
      <div className="container grid grid-cols-11 xl:flex xl:flex-col my-[30px] gap-[30px] dark:text-checkout-text">
        <div className="col-span-8">
          <div className="p-30px"></div>
        </div>
        <div className="col-span-3">456</div>
      </div>
    </>
  );
};

export default PaymentPage;
