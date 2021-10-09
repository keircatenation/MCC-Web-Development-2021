import { useState } from 'react'
import './App.css'
import {compile, evaluate, create, all} from 'mathjs'

const config = {
  number:"BigNumber"
}

const math = create(all, config)

function App() {
  const [input, setInput] = useState("");
  const [evalString, setEvalString] = useState("0");
  const [output, setOutput] = useState("0");
  const [negative, setNegative] = useState(false);

  const handleClear = () => {
    console.log("clear")
    setInput("")
    setOutput("0");
    setEvalString("0");
  }

  const handleEquals = e => {
    console.log("equals!")
    // console.log(math)
    setEvalString(prev => `${prev}` + `${input}`)
    let ev = math.evaluate(evalString)
    console.log(String(ev))
    setOutput("answer")
    setEvalString("answer");
    setInput("");
  }

  const numberPress = (e) => {
    setInput(prev => {
      if (input) {
        if (input=="0" && e.target.innerText=="0"){
          return prev
        } else if (input =="0"){
          return e.target.innerText
        }
        return prev + e.target.innerText
      } else {
        return e.target.innerText
      }
    })
  }

  const decimalPress = e => {
    // console.log(e.target.innerText)
    let regex = /\./g;
    if (!input.match(regex)) {
      setInput(prev => prev + e.target.innerText)
      // console.log("decimal")
    }
  }

  const operatorPress = e => {
    console.log(e.target.innerText)
    if (evalString && (evalString != "0")) {
      let regex = /[+-/*]$/
      if (evalString.match(regex) && input=="0"){
        setEvalString(prev => `${prev.replace(regex, e.target.innerText)}`)
      } else {
        setEvalString(prev => `${prev}` + `${input}` + e.target.innerText)
      }
    } else if (evalString=="0") {
      setEvalString(`${input}` + e.target.innerText)
    } else {
      setEvalString(`${input}` + e.target.innerText)
    }
    setNegative(false)
    setInput("0");
  }

  const negativePress = e => {
    if (negative) {
      setInput(prev =>{
        let regex = /[-()]/g
        return prev.replace(regex, "")
      })
      setNegative(false)
    } else {
      setInput(prev => `(-${prev})`)
      setNegative(true)
    }
  }

  return (
    <div id="calculator">
      <div id="evaluation">{evalString? evalString : "0"}</div>
      <div id="display">{input? input : output}</div>
      <div className="buttons">
        <div className="left-side">
          <button id="one" onClick={numberPress}>1</button>
          <button id="two" onClick={numberPress}>2</button>
          <button id="three" onClick={numberPress}>3</button>
          <button id="four" onClick={numberPress}>4</button>
          <button id="five" onClick={numberPress}>5</button>
          <button id="six" onClick={numberPress}>6</button>
          <button id="seven" onClick={numberPress}>7</button>
          <button id="eight" onClick={numberPress}>8</button>
          <button id="nine" onClick={numberPress}>9</button>
        </div>
        <div className="right-side">
          <button id="zero" onClick={numberPress}>0</button>
          <button id="decimal" onClick={decimalPress}>.</button>
          <button id="negative" onClick={negativePress}>+/-</button>
          <button id="add" className="operator" onClick={operatorPress}>+</button>
          <button id="subtract" className="operator" onClick={operatorPress}>-</button>
          <button id="multiply" className="operator" onClick={operatorPress}>*</button>
          <button id="divide" className="operator" onClick={operatorPress}>/</button>
          <button id="clear" onClick={handleClear} className="operator">CE</button>
          <button id="equals" className="operator" onClick={handleEquals}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
