import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
  const [passwordIsShowed, setPasswordIsShowed] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const submitHandler = (data) => {
    console.log(data);
  };
  const showPassword = () => {
    setPasswordIsShowed((prevState) => !prevState);
  };
  return (
    <main className="grid grid-cols-2">
      <div className="bg-left-login dark:bg-dark-left-login">123</div>
      <div className="bg-right-login dark:bg-dark-right-login">
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="flex flex-col px-[130px] pt-[110px] gap-[50px] pb-[50px]"
        >
          <div className="flex items-center justify-center gap-[14px]">
            <img src="/image/logo.svg" alt="" className="w-[32px] h-[32px]" />
            <p className="text-3xl font-bold">grocerymart</p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-4xl font-medium text-center">Login</h1>
            <p className="text-login-text text-2xl text-center">
              Welcome back to sign in. As a returning customer, you have access
              to your previously saved all information.
            </p>
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="relative">
              <input
                {...register('email', {
                  required: true,
                  pattern:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
                type="text"
                className="p-[12px] rounded-3xl text-2xl font-medium w-full border-[1px] border-solid border-login-text"
                placeholder="Email"
              />
              <img
                src="/icon/mail.svg"
                alt=""
                className="icon absolute right-[10px] top-[25%]"
              />
              {errors.email && (
                <p className="absolute bottom-[-25px] text-2xl font-medium text-rose-900">
                  Invalid email
                </p>
              )}
            </div>

            <div className="relative mt-[10px]">
              <input
                {...register('password', { required: true, minLength: 6 })}
                type={passwordIsShowed ? 'password' : 'text'}
                className="p-[12px] rounded-3xl text-2xl font-medium w-full border-[1px] border-solid border-login-text"
                placeholder="Password"
              />
              <img
                src={
                  passwordIsShowed ? '/icon/closed-eye.svg' : '/icon/eye.svg'
                }
                alt=""
                className="icon absolute w-[24px] h-[24px] right-[10px] top-[25%]"
                onClick={showPassword}
              />
              {errors.email && (
                <p className="absolute bottom-[-25px] text-2xl font-medium text-rose-900">
                  Invalid password
                </p>
              )}
            </div>

            <a href="#!" className="text-[#0071DC] text-right font-medium">
              Recovery Password
            </a>
          </div>

          <button
            type="submit"
            className="rounded-[10px] bg-login-btn text-text py-[12px] text-3xl font-medium"
          >
            Login
          </button>
          <p className="font-normal text-2xl text-login-text text-center mt-[70px]">
            Don’t have an account yet?{' '}
            <a href="" className="text-[#0071DC] font-medium ">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </main>
  );
};

export default LoginPage;
