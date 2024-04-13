import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Sidebar from './UI/Sidebar/Sidebar'

import ButtonsPage from './pages/Buttons'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ButtonsPage />
  }
]);

function App() {
  return <RouterProvider router={router} />
      // <Sidebar />
      {/* <h2>Buttons</h2>
      <div className="buttons-container">
        <Button>No styles</Button>
        <Button basic type="submit" onClick={() => console.log('hola')}>Basic</Button>
      </div>

      <h2>Tooltips</h2>
      <div className="tooltips-container">
        <Tooltip>This is a basic tooltip (bottom default tail)</Tooltip>
        <Tooltip tailPosition='right'>This is a basic tooltip (right tail)</Tooltip>
        <Tooltip tailPosition='top'>This is a basic tooltip (top tail)</Tooltip>
        <Tooltip tailPosition='left'>This is a basic tooltip (left tail)</Tooltip>
      </div>

      <h2>Circles</h2>
      <Circle d="50" />
      <Circle d="80" color="blue" />
      <Circle d="20" color="#E77013" />

      <h2>Axis & Charts</h2>
      <ResponsiveChart 
        renderX={(range: number[]) => <HorizontalAxis range={range} domain={[0, 180]} color="red" tickColor="black" tickHeight="5" />}
        renderY={(range: number[]) => <VerticalAxis range={range} domain={[0, 50]} color="red" tickColor="red" tickWidth="5" />}
      /> */}
  
}

export default App
