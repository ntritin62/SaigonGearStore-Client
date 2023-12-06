import React from 'react';
import ProfileLeft from './components/ProfileLeft';
import ProfileRight from './components/ProfileRight';
import { Outlet } from 'react-router-dom';

const ProfilePage = () => {
  return (
    <main className=" container grid grid-cols-11 mt-[30px] ">
      <ProfileLeft />
      <Outlet />
    </main>
  );
};

export default ProfilePage;
