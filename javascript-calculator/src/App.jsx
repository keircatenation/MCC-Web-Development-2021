import { useState } from 'react'
import './App.css'
import {evaluate} from 'mathjs'

function App() {
  const [input, setInput] = useState("");
  const [evalArray, setEvalArray] = useState([]);
  const [output, setOutput] = useState("0");
  const [negative, setNegative] = useState(false);

  const handleClear = () => {
    // console.log("clear")
    setInput("")
    setOutput("0");
    setEvalArray([]);
  }


  const handleEquals = e => {
    console.log(`equals! input: ${input}, and evalArray: ${evalArray}`)
    let evSt = evalArray.join("") + input;
    console.log("evSt " + evSt)

    try {
      let ev = String(evaluate(evSt));
      setOutput(ev);
      setEvalArray([ev])
    } catch (err) {
      alert(err)
    }

    setInput("");
  }

  const numberPress = (e) => {
    setInput(prev => {
      if (input) {
        if (input=="0" && e.target.innerText=="0"){
          return prev
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
    let lastIndex = evalArray.length-1;
    console.log("lastnum:" + lastIndex, "operator:" + e.target.innerText)

    let regex = /[+-/*]/

    if (lastIndex < 0) {
      console.log("no evalArray! " + [input, e.target.innerText])
      setEvalArray([input, e.target.innerText])
    } else if(evalArray.length == 1 && input == 0) {
      console.log(`evalArray is answer is what we operate on`)
      setEvalArray(prev => [...prev, e.target.innerText])
      setOutput("0")
    } else if(evalArray.length == 1) {
      console.log(`replacing the answer in evalArray to start new op`)
      setEvalArray([input, e.target.innerText])
      setOutput("0")
    } else if (evalArray[lastIndex].match(regex) && !input) {
      console.log(`replacing the last operator! ${evalArray.slice(0, lastIndex)}`)
      setEvalArray(prev => [...prev.slice(0, lastIndex), e.target.innerText])
    } else {
      console.log("just string new number and operation")
      setEvalArray(prev => [...prev, input, e.target.innerText])
    }

    setNegative(false)
    setInput("");
  }

  const negativePress = e => {
    if (negative) {
      setInput(prev =>{
        let regex = /[-]/g
        return prev.replace(regex, "")
      })
      setNegative(false)
    } else {
      setInput(prev => `-${prev}`)
      setNegative(true)
    }
  }

  return (
    <div id="calculator">
      <div id="evaluation">{evalArray[0]? evalArray.length >= 2? evalArray.join("") : evalArray[0] : "0"}</div>
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
