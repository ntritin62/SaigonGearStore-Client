import axios from 'axios';

const getProductsByCategory = async (categoryName) => {
  return await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/products/${categoryName}`,
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );
};
export async function loader({ request, params }) {
  try {
    let response;
    if (!params.brandName) {
      response = await getProductsByCategory(params.categoryName);
    }
    if (!response.status === 200) {
      const error = new Error('Invalid URL');
      error.code = response.status;
      error.info = response.data;
      throw error;
    }
    return response.data.products;
  } catch (err) {
    console.log(err);
  }
}
