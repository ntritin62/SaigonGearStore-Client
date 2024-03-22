export async function loader() {
  return fetch(`${process.env.REACT_APP_BACKEND_URL}/admin/orders`)
    .then((response) => {
      return response.json();
    })
    .then((resData) => {
      return resData.orders;
    })
    .catch((err) => {
      console.log(err);
    });
}
