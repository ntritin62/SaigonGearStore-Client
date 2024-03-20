import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
        action: LoginAction,
      },
      {
        path: `${ROUTES.SIGNUP}`,
        element: <SignUpPage />,
        action: SignupAction,
      },
      {
        path: `${ROUTES.CART}`,
        children: [
          {
            index: true,
            element: <CheckoutPage />,
          },
          {
            path: `${ROUTES.SHIPPING}`,
            element: <ShippingPage />,
          },
          {
            path: `${ROUTES.PAYMENTMETHOD}`,
            element: <PaymentPage />,
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
            path: 'add-card',
            element: <AddCard />,
            action: AddCardAction,
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
