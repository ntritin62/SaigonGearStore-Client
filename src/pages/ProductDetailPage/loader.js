import axios from 'axios';
export async function loader({ request, params }) {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/product/${params.productId}`,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
    if (!response.status === 200) {
      const error = new Error('Invalid URL');
      error.code = response.status;
      error.info = response.data;
      throw error;
    }
    return response.data.product;
  } catch (err) {
    console.log(err);
  }
}
