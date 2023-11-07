import React from 'react';
import { useLoaderData, NavLink } from 'react-router-dom';
const data = ['cold coffee', 'hot coffee'];
const Sidebar = () => {
  // const NavData = useLoaderData();
  return (
    <div className="max-w-[230px] w-full">
      <h2 className="text-4xl font-bold">Categories</h2>
      <nav className="flex flex-col gap-[16px] mt-[20px] md:flex-row">
        {data.map((item) => (
          <NavLink
            to={`./${item}`}
            className={({ isActive }) =>
              isActive
                ? 'flex items-center rounded-[10px] justify-between pl-[20px] font-bold h-[60px] bg-active-sidebar dark:bg-dark-sidebar w-full'
                : 'flex items-center rounded-[10px] justify-between pl-[20px] font-bold h-[60px] dark:bg-dark-sidebar bg-sidebar w-full'
            }
          >
            {item}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
