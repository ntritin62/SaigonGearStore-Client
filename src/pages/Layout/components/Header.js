import React from 'react';
import ThemeToggle from '../../../components/ThemeToggle';
import Dropdown from '../../../components/Dropdown';
import { useState } from 'react';

const Header = () => {
  const [searchIsVisible, setSearchIsVisible] = useState(false);
  const [sideBarIsVisible, setSideBarIsVisible] = useState(false);
  return (
    <header className=" bg-header-bg dark:bg-dark-header-bg">
      <div className="relative container flex items-center py-[30px] sm:justify-between ">
        {/* More */}
        <button
          className="icon hidden lg:block mr-[30px] sm:mr-0"
          onClick={() => {
            setSideBarIsVisible(true);
          }}
        >
          <img src="./icon/more.svg" alt="" />
        </button>
        {/* Logo */}
        <figure className="flex items-center gap-6">
          <img
            className="w-[32px] h-[32px] lg:w-[24px] lg:h-[24px]"
            src="./image/logo.svg"
            alt=""
          />
          <span className="text-4xl  font-bold lg:text-2xl">grocerymart</span>
        </figure>
        {/* Navbar */}

        <nav
          className={
            'transition-transform duration-500 translate-x-[-100%] ml-[129px] lg:fixed sm:right-[50px] lg:right-1/2 lg:top-0 lg:bottom-0 lg:left-0 lg:ml-0 lg:bg-dropdown dark:bg-dark-dropdown-bg lg:z-20 lg:p-[20px]' +
            (sideBarIsVisible ? ' translate-x-0' : '')
          }
        >
          <button
            onClick={() => {
              setSideBarIsVisible(false);
            }}
          >
            <img
              src="./icon/arrow-left.svg"
              alt=""
              className="icon hidden lg:block"
            />
          </button>
          <ul className="flex items-center font-medium text-2xl lg:flex-col lg:items-start lg:mt-[20px]">
            <li className="flex h-[50px] px-[15px] items-center gap-[6px] cursor-pointer lg:px-0">
              <a href="#!">Coffee</a>
            </li>
            <li className="flex h-[50px] px-[15px] items-center gap-[6px] cursor-pointer lg:px-0">
              <a href="#!">Tea</a>
            </li>
            <li className="group h-[50px] flex px-[15px] items-center gap-[6px] cursor-pointer lg:px-0 lg:justify-between lg:w-[100%]">
              <a href="#!">Menu</a>
              <img src="./icon/arrow-down.svg" alt="" className="icon" />
              <Dropdown />
            </li>
          </ul>
        </nav>
        <div
          className={
            'opacity-0 invisible transition-opacity transition-visibility duration-500 lg:fixed inset-0 lg:bg-[rgba(0,0,0,0.4)] lg:z-10' +
            (sideBarIsVisible ? ' lg:opacity-100 lg:visible' : '')
          }
        ></div>

        <div className="ml-auto flex items-center gap-[20px] sm:ml-0 sm:gap-0 ">
          <div className="flex items-center cursor-pointer bg-top-act-group dark:bg-dark-top-act-group p-[13px]  rounded-lg text-2xl font-medium shadow-[0px_20px_60px_10px_rgba(237,237,246,0.20)] dark:shadow-[0px_20px_60px_10px_rgba(0,0,0,0.20)] sm:hidden">
            {searchIsVisible && (
              <div className="lg:max-w-[140px]">
                <input type="text" />
              </div>
            )}
            <img
              src="./icon/search.svg"
              alt=""
              className="icon "
              onClick={() => {
                setSearchIsVisible((prevState) => !prevState);
              }}
            />
          </div>
          <div className="flex items-center  gap-[20px] bg-top-act-group dark:bg-dark-top-act-group px-[20px] py-[10px] rounded-lg text-2xl font-medium shadow-[0px_20px_60px_10px_rgba(237,237,246,0.20)] dark:shadow-[0px_20px_60px_10px_rgba(0,0,0,0.20)] sm:hidden">
            <div className="flex items-center gap-[10px] cursor-pointer">
              <img src="./icon/heart.svg" alt="" className="icon" />
              <p className="mt-[3px]">03</p>
            </div>
            <div className="w-[1px] h-[30px] bg-top-act-group-separate"></div>
            <div className="flex items-center gap-[10px] cursor-pointer">
              <img src="./icon/cart.svg" alt="" className="icon" />
              <p className="mt-[3px]">$65.42</p>
            </div>
          </div>
          <figure>
            <img
              src="./image/avatar.jpg"
              alt=""
              className="w-[50px] h-[50px] shadow-[0px_4px_14px_2px_rgba(0,0,0,0.08)] rounded-[8px]"
            />
          </figure>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
