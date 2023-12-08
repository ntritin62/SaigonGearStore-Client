import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../../../../../constants/routes';
import { useForm } from 'react-hook-form';
import { Form, useNavigation } from 'react-router-dom';
import { useSubmit } from 'react-router-dom';

const AddCard = () => {
  const submit = useSubmit();
  const navigation = useNavigation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const text =
    navigation.state === 'submitting'
      ? 'Saving...'
      : navigation.state === 'loading'
      ? 'Saved!'
      : 'Save Card';

  const submitHandler = (data) => {
    submit(data, { method: 'post' });
  };
  return (
    <section className="col-span-8 p-[30px] bg-profile-right dark:bg-dark-profile-right rounded-[20px]">
      <div className="flex items-center gap-[10px]">
        <Link to={ROUTES.PROFILE}>
          <img src="/icon/arrow-left.svg" alt="" className="dark-icon" />
        </Link>
        <h2 className="text-3xl font-medium">Add credit or debit card</h2>
      </div>
      <Form onSubmit={handleSubmit(submitHandler)} className="mt-[30px]">
        <div className="grid grid-cols-2 gap-[30px] sm:grid-cols-1">
          <div className="flex flex-col gap-[20px] relative">
            <label htmlFor="firstName" className="text-3xl font-medium">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="p-[12px] border-[1px] border-solid border-[#D2D1D6] rounded-[10px] placeholder:text-[#D2D1D6]"
              placeholder="First Name"
              {...register('firstName', { required: true })}
            />
            {errors.firstName && (
              <p className="absolute bottom-[-25px] text-2xl font-medium text-rose-900">
                Please enter your firstName name.
              </p>
            )}
          </div>
          <div className="flex flex-col gap-[20px] relative">
            <label htmlFor="lastName" className="text-3xl font-medium">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="p-[12px] border-[1px] border-solid border-[#D2D1D6] rounded-[10px] placeholder:text-[#D2D1D6]"
              placeholder="Last Name"
              {...register('lastName', { required: true })}
            />
            {errors.lastName && (
              <p className="absolute bottom-[-25px] text-2xl font-medium text-rose-900">
                Please enter your last name.
              </p>
            )}
          </div>
          <div className="flex flex-col gap-[20px] relative">
            <label htmlFor="cardNumber" className="text-3xl font-medium">
              Card Information
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              className="p-[12px] border-[1px] border-solid border-[#D2D1D6] rounded-[10px] placeholder:text-[#D2D1D6]"
              placeholder="Card Number"
              {...register('cardNumber', {
                required: true,
                validate: {
                  regex: (value) =>
                    [
                      /^4[0-9]{12}(?:[0-9]{3,4})?$/,
                      /^4[19658][7684][0785][04278][128579](?:[0-9]{10})$/,
                      /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/,
                      /^(?:5[13]99|55[35][19]|514[36])(?:11|4[10]|23|83|88)(?:[0-9]{10})$/,
                      /^(?:50[067][180]|6500)(?:[0-9]{15})$/,
                      /^3[47](?:[0-9]{13})$/,
                      /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
                      /^(5899|5018|5020|5038|6304|6703|6708|6759|676[1-3])[06][19](?:[0-9]{10})$/,
                      /^6(?:011|4[4-9]3|222|5[0-9]{2})[0-9]{12}$/,
                      /^(6706|6771|6709)[0-9]{11,15}$/,
                      /^(384100|384140|384160|606282|637095|637568|60(?!11))/,
                      /^(?:2131|1800|35\d{3})\d{11}$/,
                    ].some((pattern) => value.match(pattern)),
                },
              })}
            />
            {errors.cardNumber && (
              <p className="absolute bottom-[-25px] text-2xl font-medium text-rose-900">
                Invalid card number.
              </p>
            )}
          </div>
          <div className="flex flex-col gap-[20px] relative">
            <label htmlFor="expDate" className="text-3xl font-medium">
              Expiration Date
            </label>
            <input
              type="text"
              id="expDate"
              name="expDate"
              className="p-[12px] border-[1px] border-solid border-[#D2D1D6] rounded-[10px] placeholder:text-[#D2D1D6]"
              placeholder="MM/YY"
              {...register('expDate', {
                required: true,
                pattern: /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/gm,
              })}
            />
            {errors.expDate && (
              <p className="absolute bottom-[-25px] text-2xl font-medium text-rose-900">
                Invalid expiration date.
              </p>
            )}
          </div>
          <div className="flex flex-col gap-[20px] relative">
            <label htmlFor="cvv" className="text-3xl font-medium">
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              className="p-[12px] border-[1px] border-solid border-[#D2D1D6] rounded-[10px] placeholder:text-[#D2D1D6]"
              placeholder="123"
              {...register('cvv', {
                required: true,
                pattern: /^[0-9]{3,4}$/,
              })}
            />
            {errors.cvv && (
              <p className="absolute bottom-[-25px] text-2xl font-medium text-rose-900">
                Invalid CVV number.
              </p>
            )}
          </div>
          <div className="flex flex-col gap-[20px] relative">
            <label htmlFor="phoneNumber" className="text-3xl font-medium">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              className="p-[12px] border-[1px] border-solid border-[#D2D1D6] rounded-[10px] placeholder:text-[#D2D1D6]"
              placeholder="123"
              {...register('phoneNumber', {
                required: true,
                pattern:
                  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gm,
              })}
            />
            {errors.phoneNumber && (
              <p className="absolute bottom-[-25px] text-2xl font-medium text-rose-900">
                Invalid phone number.
              </p>
            )}
          </div>
        </div>
        <div className="mt-[30px] flex justify-end gap-[30px] items-center">
          <Link to={ROUTES.PROFILE} className="text-2xl font-medium">
            Cancel
          </Link>
          <button
            type="submit"
            className="text-2xl font-medium py-[10px] px-[20px] rounded-[30px] bg-[#FFB700] text-[#1A162E]"
          >
            {text}
          </button>
        </div>
      </Form>
    </section>
  );
};

export default AddCard;
