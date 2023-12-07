import React from 'react';
import ProfileLeft from './components/ProfileLeft';
import ProfileRight from './components/ProfileRight';
// import { Outlet } from 'react-router-dom';

const ProfilePage = () => {
  return (
    <main className="dark:text-dark-profile-text container grid grid-cols-11 mt-[30px] md:flex md:flex-col gap-[30px]">
      <ProfileLeft />
      <ProfileRight />
    </main>
  );
};

export default ProfilePage;
