import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import ProductsPageLayout from './pages/ProductsPageLayout';
import ProductsMain from './pages/ProductsPageLayout/components/ProductsMain';
import ProductDetail from './pages/ProductDetailPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

const router = createBrowserRouter([
  {
    path: `${ROUTES.HOME}`,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: `${ROUTES.LOGIN}`,
        element: <LoginPage />,
      },
      {
        path: `${ROUTES.SIGNUP}`,
        element: <SignUpPage />,
      },
      {
        path: `${ROUTES.PRODUCTDETAIL}`,
        element: <ProductDetail />,
      },
      {
        path: ':products',
        element: <ProductsPageLayout />,
        children: [
          {
            path: ':productsType',
            element: <ProductsMain />,
          },
        ],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
