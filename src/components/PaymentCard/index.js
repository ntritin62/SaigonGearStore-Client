import { useEffect, useState } from 'react';

import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './components/CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';

function Payment() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/checkout/config`).then(
      async (r) => {
        const { publishableKey } = await r.json();
        console.log(publishableKey);
        setStripePromise(loadStripe(publishableKey));
      }
    );
  }, []);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_SERVER_URL}/checkout/create-payment-intent`,
      {
        method: 'POST',
        body: JSON.stringify({}),
      }
    ).then(async (result) => {
      var { clientSecret } = await result.json();
      console.log(result);
      setClientSecret(clientSecret);
    });
  }, []);

  return (
    <>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
}

export default Payment;
