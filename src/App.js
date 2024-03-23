import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUserCart } from './redux/cartSlice';
import { getUser } from './redux/userSlice';
import * as ROUTES from './constants/routes';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import ProductsPageLayout from './pages/ProductsPageLayout';
import ProductsMain from './pages/ProductsPageLayout/components/ProductsMain';
import ProductDetail from './pages/ProductDetailPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ProfilePage from './pages/ProfilePage';
import ProfileRight from './pages/ProfilePage/components/ProfileRight';
import AddCard from './pages/ProfilePage/components/ProfileRight/components/AddCard';
import EditInfo from './pages/ProfilePage/components/ProfileRight/components/EditInfo';
import AddCardAction from './pages/ProfilePage/components/ProfileRight/components/AddCard/action';
import EditInfoAction from './pages/ProfilePage/components/ProfileRight/components/EditInfo/action';
import CheckoutPage from './pages/CheckoutPage';
import ShippingPage from './pages/ShippingPage';
import PaymentPage from './pages/PaymentPage';
import PaymentSuccess from './pages/PaymentSuccess';
import { action as LoginAction } from './pages/LoginPage/action';
import { action as SignupAction } from './pages/SignUpPage/action';
import { loader as BrandLoader } from './pages/ProductsPageLayout/loader';
import { loader as ProductLoader } from './pages/ProductsPageLayout/components/ProductsMain/loader';
import { loader as ProductDetailLoader } from './pages/ProductDetailPage/loader';
import { loader as HomePageLoader } from './pages/HomePage/loader';
import OrdersPage from './pages/ProfilePage/components/ProfileRight/components/Orders';
import { loader as OrdersPageLoader } from './pages/ProfilePage/components/ProfileRight/components/Orders/loader';
import getAuthToken from './services/getToken';
import AdminOrders from './pages/Admin/AdminOrders';
import AdminProducts from './pages/Admin/AdminProducts';
import AdminLayout from './pages/Admin/AdminLayout';
import { loader as AdminProductsLoader } from './pages/Admin/AdminProducts/loader';
import { loader as AdminOrdersLoader } from './pages/Admin/AdminOrders/loader';
import { loader as CheckoutPageLoader } from './pages/PaymentPage/loader';

const token = getAuthToken();

const router = createBrowserRouter([
  {
    path: `${ROUTES.HOME}`,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: HomePageLoader,
      },
      {
        path: `${ROUTES.LOGIN}`,
        element: <LoginPage />,
        loader: () => {
          if (token) {
            return redirect(ROUTES.HOME);
          }
          return null;
        },
        action: LoginAction,
      },
      {
        path: `${ROUTES.SIGNUP}`,
        element: <SignUpPage />,
        loader: () => {
          if (token) {
            return redirect(ROUTES.HOME);
          }
          return null;
        },
        action: SignupAction,
      },
      {
        path: `${ROUTES.CART}`,
        loader: () => {
          if (!token) {
            return redirect(ROUTES.LOGIN);
          }
          return null;
        },
        children: [
          {
            index: true,
            element: <CheckoutPage />,
          },
          {
            path: `${ROUTES.SHIPPING}`,
            element: <ShippingPage />,
            loader: CheckoutPageLoader,
          },
          {
            path: `${ROUTES.PAYMENTMETHOD}`,
            element: <PaymentPage />,
            loader: CheckoutPageLoader,
          },
          {
            path: `${ROUTES.PAYMENTSUCCESS}`,
            element: <PaymentSuccess />,
          },
        ],
      },
      {
        path: `${ROUTES.PROFILE}`,
        element: <ProfilePage />,
        loader: () => {
          if (!token) {
            return redirect(ROUTES.LOGIN);
          }
          return null;
        },
        children: [
          {
            index: true,
            element: <ProfileRight />,
          },
          {
            path: 'edit-info',
            element: <EditInfo />,
            action: EditInfoAction,
          },
          {
            path: 'add-address',
            element: <AddCard />,
            action: AddCardAction,
          },
          {
            path: 'orders',
            element: <OrdersPage />,
            loader: OrdersPageLoader,
          },
        ],
      },
      {
        path: `${ROUTES.PRODUCTDETAIL}`,
        element: <ProductDetail />,
        loader: ProductDetailLoader,
      },
      {
        path: ':categoryName',
        element: <ProductsPageLayout />,
        loader: BrandLoader,
        children: [
          {
            index: true,
            element: <ProductsMain />,
            loader: ProductLoader,
          },
          {
            path: ':brandName',
            element: <ProductsMain />,
            loader: ProductLoader,
          },
        ],
      },
    ],
  },
  {
    path: `${ROUTES.ADMIN}`,
    element: <AdminLayout />,
    loader: AdminProductsLoader,
    children: [
      {
        path: '/admin/products',
        element: <AdminProducts />,
        loader: AdminProductsLoader,
      },
      {
        path: '/admin/orders',
        element: <AdminOrders />,
        loader: AdminOrdersLoader,
      },
    ],
  },
]);
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserCart());
    dispatch(getUser());
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
