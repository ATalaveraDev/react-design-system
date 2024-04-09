import './App.css'
import Button from './components/Button/Button'

function App() {
  return (
    <>
      <h2>Buttons</h2>
      <Button>No styles</Button>
      <Button basic type="submit" onClick={() => console.log('hola')}>Basic</Button>
    </>
  )
}

export default App
