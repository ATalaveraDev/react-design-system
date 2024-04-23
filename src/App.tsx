import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css';

import ButtonsPage from './pages/Buttons'
import Root from './pages/Root';
import TooltipsPage from './pages/Tooltips';
import CirclesPage from './pages/Circles';
import ChartsPage from './pages/Charts';
import Cover from './pages/Cover';
import SelectsPage from './pages/Selects';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Cover />
      },
      {
        path: '/buttons',
        element: <ButtonsPage />
      },
      {
        path: '/selects',
        element: <SelectsPage />
      },
      {
        path: '/tooltips',
        element: <TooltipsPage />
      },
      {
        path: '/circles',
        element: <CirclesPage />
      },
      {
        path: '/charts',
        element: <ChartsPage />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />  
}

export default App
