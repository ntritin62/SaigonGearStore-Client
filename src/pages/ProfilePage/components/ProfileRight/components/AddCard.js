import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../../../../constants/routes';

const AddCard = () => {
  return (
    <section className="col-span-8 p-[30px] bg-profile-right dark:bg-dark-profile-right rounded-[20px]">
      <div className="flex items-center gap-[10px]">
        <Link to={ROUTES.PROFILE}>
          <img src="/icon/arrow-left.svg" alt="" className="dark-icon" />
        </Link>
        <h2 className="text-3xl font-medium">Personal info</h2>
      </div>
      <form action="" className="mt-[30px]">
        <div className="grid grid-cols-2 gap-[30px] sm:grid-cols-1">
          <div className="flex flex-col gap-[20px]">
            <label htmlFor="name" className="text-3xl font-medium">
              Full name
            </label>
            <input
              type="text"
              id="name"
              className="p-[12px] border-[1px] border-solid border-[#D2D1D6] rounded-[10px] placeholder:text-[#D2D1D6]"
              placeholder="Full name"
            />
          </div>
          <div className="flex flex-col gap-[20px]">
            <label htmlFor="email" className="text-3xl font-medium">
              Email address
            </label>
            <input
              type="text"
              id="email"
              className="p-[12px] border-[1px] border-solid border-[#D2D1D6] rounded-[10px] placeholder:text-[#D2D1D6]"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col gap-[20px]">
            <label htmlFor="phone" className="text-3xl font-medium">
              Phone number
            </label>
            <input
              type="text"
              id="phone"
              className="p-[12px] border-[1px] border-solid border-[#D2D1D6] rounded-[10px] placeholder:text-[#D2D1D6]"
              placeholder="Phone number"
            />
          </div>
          <div className="flex flex-col gap-[20px]">
            <label htmlFor="password" className="text-3xl font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="p-[12px] border-[1px] border-solid border-[#D2D1D6] rounded-[10px] placeholder:text-[#D2D1D6]"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="mt-[30px] flex justify-end gap-[30px] items-center">
          <Link to={ROUTES.PROFILE} className="text-2xl font-medium">
            Cancel
          </Link>
          <button className="text-2xl font-medium py-[10px] px-[20px] rounded-[30px] bg-[#FFB700] text-[#1A162E]">
            Save Edit
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddCard;
