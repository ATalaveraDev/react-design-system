import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css';

import ButtonsPage from './pages/Buttons'
import Root from './pages/Root';
import TooltipsPage from './pages/Tooltips';
import CirclesPage from './pages/Circles';
import ChartsPage from './pages/Charts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/buttons',
        element: <ButtonsPage />
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
