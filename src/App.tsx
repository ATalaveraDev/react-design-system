import './App.css'

import Button from './components/Button/Button'
import Circle from './components/Circle/Circle'
import HorizontalAxis from './components/HorizontalAxis/HorizontalAxis'
import ResponsiveChart from './components/ResponsiveChart/ResponsiveChart'
import Tooltip from './components/Tooltip/Tooltip'
import VerticalAxis from './components/VerticalAxis/VerticalAxis'

function App() {
  return (
    <>
      <h2>Buttons</h2>
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
      <VerticalAxis domain={[0, 50]} color="#E77013" tickColor="green" tickWidth="5" />
      <ResponsiveChart>
        <HorizontalAxis domain={[0, 180]} color="red" tickColor="black" tickHeight="5" />
      </ResponsiveChart>
    </>
  )
}

export default App
