import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
  {
    path: `${ROUTES.HOME}`,
    element: <Layout />,
    children: [{ index: true, element: <HomePage /> }],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
