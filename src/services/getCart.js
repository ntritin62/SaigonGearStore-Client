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
