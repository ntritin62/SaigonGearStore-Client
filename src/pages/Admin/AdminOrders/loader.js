import axios from 'axios';
export async function loader() {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/admin/orders`
  );

  return response.data.orders;
}
