import './App.css'
import Button from './components/Button/Button'
import Tooltip from './components/Tooltip/Tooltip'

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
    </>
  )
}

export default App
