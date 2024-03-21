import React from 'react';
import ThemeToggle from '../../../components/ThemeToggle';
import Dropdown from '../../../components/Dropdown';
import ActionDropdown from './ActionDropdown';
import { useState } from 'react';
import * as ROUTES from '../../../constants/routes';
import { Link, NavLink } from 'react-router-dom';
import { UseSelector, useSelector } from 'react-redux';

const Header = () => {
  const [searchIsVisible, setSearchIsVisible] = useState(false);
  const [sideBarIsVisible, setSideBarIsVisible] = useState(false);
  const cart = useSelector((state) => state.cart);

  // const docEl = document.documentElement;
  // const [isEnabled, setIsEnabled] = useState(docEl.classList.contains('dark'));
  const [isEnabled, setIsEnabled] = useState(localStorage.getItem('dark'));
  return (
    <header className=" bg-header-bg dark:bg-dark-header-bg fixed top-0 left-0 right-0 z-50">
      <div className="relative container flex items-center py-[30px] md:justify-between lg:py-[16px]">
        {/* More */}
        <button
          className="icon hidden lg:block mr-[30px] md:mr-0"
          onClick={() => {
            setSideBarIsVisible(true);
          }}
        >
          <img src="/icon/more.svg" alt="" />
        </button>
        {/* Logo */}

        <Link href={ROUTES.HOME} className=" flex items-center justify-between">
          <figure className="flex items-center gap-[10px]">
            <img
              className="icon w-[50px] h-[50px] lg:w-[24px] lg:h-[24px]"
              src="/image/logo.svg"
              alt=""
            />
            {/* <span className="text-4xl  font-bold lg:text-2xl">TNTGear</span> */}
          </figure>
        </Link>

        {/* Navbar */}
        <nav
          className={
            'lg:overflow-auto transition-transform duration-500  ml-[129px] lg:fixed md:right-1/2 lg:right-1/2 lg:top-0 lg:bottom-0 lg:left-0 lg:ml-0 lg:bg-dropdown lg:dark:bg-dark-dropdown-bg lg:z-30 lg:p-[20px]' +
            (sideBarIsVisible ? ' lg:translate-x-0' : ' lg:translate-x-[-100%]')
          }
        >
          <ThemeToggle
            className="hidden md:inline-block md:mx-auto"
            isEnabled={isEnabled}
            setIsEnabled={setIsEnabled}
          />
          <button
            onClick={() => {
              setSideBarIsVisible(false);
            }}
            className="icon hidden lg:block"
          >
            <img src="/icon/arrow-left.svg" alt="" />
          </button>

          <ul className="flex items-center font-medium text-2xl lg:flex-col lg:items-start lg:mt-[20px]">
            <li className="hidden lg:flex h-[50px] px-[15px] items-center gap-[6px] cursor-pointer lg:px-0 justify-between w-full">
              <div className="flex items-center gap-[16px]">
                <img src="/icon/cart.svg" alt="" className="icon" />
                <a href="#!">Cart</a>
              </div>
              <span>03</span>
            </li>

            <li className="flex h-[50px] px-[15px] items-center gap-[6px] cursor-pointer lg:px-0 lg:w-full">
              <Link to="./keyboard">Keyboard</Link>
            </li>
            <li className="flex h-[50px] px-[15px] items-center gap-[6px] cursor-pointer lg:px-0 lg:w-full">
              <Link to="./mouse">Mouse</Link>
            </li>
            <li className="flex h-[50px] px-[15px] items-center gap-[6px] cursor-pointer lg:px-0 lg:w-full">
              <Link to="./headphone">Headphone</Link>
            </li>
            {/* <li className="group flex px-[15px] cursor-pointer lg:px-0 lg:flex lg:flex-col lg:w-full lg:gap-10">
              <div className="flex h-[50px] items-center lg:w-full lg:justify-between gap-[6px] lg:">
                <a href="#!">Menu</a>
                <img src="/icon/arrow-down.svg" alt="" className="icon" />
              </div>
              <Dropdown />
            </li> */}
          </ul>
        </nav>
        <div
          className={
            'opacity-0 invisible transition-opacity transition-visibility duration-500 lg:fixed inset-0 lg:bg-[rgba(0,0,0,0.4)] lg:z-20' +
            (sideBarIsVisible ? ' lg:opacity-100 lg:visible' : '')
          }
        ></div>

        <div className="ml-auto flex items-center gap-[20px] md:ml-0 md:gap-0 ">
          <div className="flex items-center cursor-pointer bg-top-act-group dark:bg-dark-top-act-group p-[13px]  rounded-lg text-2xl font-medium shadow-[0px_20px_60px_10px_rgba(237,237,246,0.20)] dark:shadow-[0px_20px_60px_10px_rgba(0,0,0,0.20)] md:hidden">
            {searchIsVisible && (
              <div className="lg:max-w-[140px]">
                <input type="text" />
              </div>
            )}
            <img
              src="/icon/search.svg"
              alt=""
              className="icon "
              onClick={() => {
                setSearchIsVisible((prevState) => !prevState);
              }}
            />
          </div>
          <div className="relative group flex items-center  gap-[20px] bg-top-act-group dark:bg-dark-top-act-group px-[20px] py-[10px] rounded-lg text-2xl font-medium shadow-[0px_20px_60px_10px_rgba(237,237,246,0.20)] dark:shadow-[0px_20px_60px_10px_rgba(0,0,0,0.20)] md:hidden">
            <div className="flex items-center gap-[10px] cursor-pointer">
              <img src="/icon/cart.svg" alt="" className="icon" />
              <p className="mt-[3px] w-[50px] text-center">
                ${cart.totalPrice.toFixed(2)}
              </p>
            </div>
            <ActionDropdown />
          </div>
          <Link to={ROUTES.PROFILE}>
            <figure>
              <img
                src="/image/avatar.jpg"
                alt=""
                className="w-[50px] h-[50px] shadow-[0px_4px_14px_2px_rgba(0,0,0,0.08)] rounded-[8px]"
              />
            </figure>
          </Link>
          <ThemeToggle
            className="block md:hidden"
            isEnabled={isEnabled}
            setIsEnabled={setIsEnabled}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
