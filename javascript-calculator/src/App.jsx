import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState(0);
  const [output, setOutput] = useState(0);

  const handleClear = () => {
    console.log("clear")
    setInput(0)
    setOutput(0);
  }

  return (
    <div id="calculator">
      <div id="display">{output}</div>
      <div className="numbers">
        <button id="one">1</button>
        <button id="two">2</button>
        <button id="three">3</button>
        <button id="four">4</button>
        <button id="five">5</button>
        <button id="six">6</button>
        <button id="seven">7</button>
        <button id="eight">8</button>
        <button id="nine">9</button>
        <button id="negative">+/-</button>
        <button id="zero">0</button>
        <button id="decimal">.</button>
      </div>
      <button id="add">+</button>
      <button id="subtract">-</button>
      <button id="multiply">x</button>
      <button id="divide">÷</button>
      <button id="clear" onClick={handleClear}>CE</button>
      <button id="equals">=</button>
    </div>
  )
}

export default App
