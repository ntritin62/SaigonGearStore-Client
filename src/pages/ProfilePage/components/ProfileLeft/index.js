import React from 'react';
import { Link } from 'react-router-dom';

const ProfileLeft = () => {
  return (
    <aside className="col-span-3 rounded-3xl  overflow-hidden">
      <section className="relative flex flex-col items-center z-0 overflow-hidden bg-[url('../public/image/profile-bg-avatar.png')]   bg-cover pt-[40px] px-[70px] pb-[20px]  after:content-[''] after:bg-gradient-to-b after:from-[rgba(26,22,46,0)] to-[#1A162E] after:top-0 after:left-0 after:right-0 after:bottom-0 after:absolute after:z-100 ">
        <img
          src="/image/avatar.jpg"
          alt=""
          className="w-[116px] h-[116px] rounded-full border-[5px] border-solid border-[rgba(255,255,255,0.20)]"
        />
        <h1 className="text-3xl font-bold text-white">Imran Khan</h1>
        <p className="text-2xl font-medium text-white">
          Registered: 17th May 2022
        </p>
      </section>
      <ul className="p-[30px] bg-top-act-group rounded-b-3xl dark:bg-dark-header-bg">
        <h2 className="text-3xl font-medium">Manage Account</h2>
        <li className="mt-[16px]">
          <Link className="flex gap-[10px] items-center">
            <img
              src="/icon/profile.svg"
              alt=""
              className="dark-icon w-[24px] h-[24px]"
            />
            <p>Personal info</p>
          </Link>
        </li>
        <li className="mt-[10px]">
          <Link className="flex gap-[10px] items-center">
            <img
              src="/icon/address.svg"
              alt=""
              className="dark-icon w-[24px] h-[24px]"
            />
            <p>Addresses</p>
          </Link>
        </li>
        <li className="mt-[10px]">
          <Link className="flex gap-[10px] items-center">
            <img
              src="/icon/message.svg"
              alt=""
              className="dark-icon w-[24px] h-[24px]"
            />
            <p>Communications & privacy</p>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default ProfileLeft;
