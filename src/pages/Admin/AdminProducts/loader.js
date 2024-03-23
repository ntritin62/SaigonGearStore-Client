import axios from 'axios';
import { getUserService } from '../../../services/userService';
import * as ROUTES from '../../../constants/routes';
import { redirect } from 'react-router-dom';
export async function loader() {
  const res = await getUserService();
  const role = res.data.user.role;
  if (role != 'admin') {
    return redirect(ROUTES.HOME);
  }
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/admin/products`
  );
  return response.data.products;
}
