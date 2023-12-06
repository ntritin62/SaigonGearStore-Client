import React from 'react';

import ReactCreditCards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';

const ProfileRight = () => {
  const preview = false;
  return (
    <section className="col-span-8 grid grid-cols-2 gap-[20px]">
      <ReactCreditCards
        number="371231231232111"
        expiry="10/20"
        cvc="235"
        name="JOHN SMITH"
      />
      <ReactCreditCards
        number="491231231232111"
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
    </section>
  );
};

export default ProfileRight;
