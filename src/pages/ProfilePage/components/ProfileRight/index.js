import React from 'react';

import ReactCreditCards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { Link } from 'react-router-dom';

const ProfileRight = () => {
  const preview = false;
  return (
    <section className="col-span-8  rounded-[20px] p-[30px] bg-top-act-group dark:bg-dark-header-bg">
      <h2 className="text-4xl font-bold">My Wallet</h2>
      <p className="text-2xl mt-[4px]">Payment methods</p>
      <div className="mt-[16px] grid grid-cols-3 sm:grid-cols-1 lg:grid-cols-2 gap-[30px]">
        <Link to="./add-card" className="block mx-auto">
          <button className="w-[281px]  rounded-[10px] border-dashed border-[1px] py-[56px] border-dark-profile-text">
            <img
              src="/icon/plus.svg"
              alt=""
              className="dark-icon w-[20px] h-[20px] mx-auto "
            />
            <p className="text-2xl font-medium mt-[14px] text-dark-profile-text">
              Add New Card
            </p>
          </button>
        </Link>
        <ReactCreditCards
          number="371231231232111"
          expiry="10/20"
          cvc="235"
          name="JOHN SMITH"
        />
        <ReactCreditCards
          number="511231231232111"
          expiry="10/20"
          cvc="235"
          name="JOHN SMITH"
        />
        <ReactCreditCards
          number="511231231232111"
          expiry="10/20"
          cvc="235"
          name="JOHN SMITH"
        />
        <ReactCreditCards
          number="511231231232111"
          expiry="10/20"
          cvc="235"
          name="JOHN SMITH"
        />
      </div>
      <h2 className="text-4xl font-bold mt-[30px]">Account info</h2>
      <p className="text-2xl mt-[4px] ">
        Addresses, contact information and password
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-1 gap-[20px] mt-[16px] ">
        <div className="p-[10px] bg-profile-card dark:bg-dark-profile-card flex items-center gap-[10px] rounded-[10px]">
          <div className="p-[15px] bg-white rounded-[8px] dark:bg-dark-item-card">
            <img src="/icon/mail.svg" alt="" className="dark-icon" />
          </div>
          <div>
            <p className="text-2xl font-medium">Email Address</p>
            <p className="text-xl mt-[6px]">tarek97.ta@gmail.com</p>
          </div>
        </div>
        <div className="p-[10px] bg-profile-card dark:bg-dark-profile-card flex items-center gap-[10px] rounded-[10px]">
          <div className="p-[15px] bg-white rounded-[8px] dark:bg-dark-item-card">
            <img src="/icon/phone.svg" alt="" className="dark-icon" />
          </div>
          <div>
            <p className="text-2xl font-medium">Phone number</p>
            <p className="text-xl mt-[6px]">+000 11122 2345 657</p>
          </div>
        </div>
        <div className="p-[10px] bg-profile-card dark:bg-dark-profile-card flex items-center gap-[10px] rounded-[10px]">
          <div className="p-[15px] bg-white rounded-[8px] dark:bg-dark-item-card">
            <img src="/icon/address.svg" alt="" className="dark-icon" />
          </div>
          <div>
            <p className="text-2xl font-medium">Add an address</p>
            <p className="text-xl mt-[6px]">
              Bangladesh Embassy, Washington, DC 20008
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileRight;
