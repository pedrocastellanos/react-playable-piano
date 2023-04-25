import { useState } from 'react'
import './App.css'
import { KeysList } from './KeysList'

function App() {
  const [show, setShow] = useState(true)
  
  return (
    <div className="wrapper">
      <header>
        <h2>Play Piano</h2>
        {/* <div className="column volume-slider">
          <span>Volume</span>
          <input type="range" value={volume} onChange={handleVolume} />
        </div> */}
        <div className="column keys-checkbox">
          <span>Show Keys</span>
          <input type="checkbox" onChange={() => setShow(!show)} value={show} checked={show} />
        </div>
      </header>
      <KeysList show={show} />
    </div>
  )
}

export default App

















