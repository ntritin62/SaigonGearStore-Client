import axios from 'axios';
import getAuthToken from './getToken';
export default async function getCart() {
  const token = getAuthToken();
  return await axios.get(`${process.env.REACT_APP_SERVER_URL}/cart`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
}

export const addToCartService = async (product) => {
  const token = getAuthToken();
  return await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/cart`,
    { product: product },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const deleteItemInCartService = async (productId) => {
  const token = getAuthToken();
  return await axios.delete(
    `${process.env.REACT_APP_SERVER_URL}/cart`,
    { productId: productId },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
