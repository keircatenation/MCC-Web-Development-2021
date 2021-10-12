import { useState } from 'react'
import './App.css'
import Number from './components/Number';
import Operator from './components/Operator';
import Decimal from './components/Decimal';
import Negative from './components/Negative';
import Clear from './components/Clear';
import Equals from './components/Equals';

function App() {
  const [input, setInput] = useState("");
  const [evalArray, setEvalArray] = useState([]);
  const [output, setOutput] = useState("0");
  const [negative, setNegative] = useState(false);

  return (
    <div id="calculator">
      <div id="evaluation">{evalArray[0]? evalArray.length >= 2? evalArray.join("") : evalArray[0] : "0"}</div>

      <div id="display">{input? input : output}</div>

      <div className="buttons">
        <div className="left-side">
          <Number id="one" num="1" input={input} setter={setInput}/>
          <Number id="two" num="2" input={input} setter={setInput}/>
          <Number id="three" num="3" input={input} setter={setInput}/>
          <Number id="four" num="4" input={input} setter={setInput}/>
          <Number id="five" num="5" input={input} setter={setInput}/>
          <Number id="six" num="6" input={input} setter={setInput}/>
          <Number id="seven" num="7" input={input} setter={setInput}/>
          <Number id="eight" num="8" input={input} setter={setInput}/>
          <Number id="nine" num="9" input={input} setter={setInput}/>
        </div>
        <div className="right-side">
          <Number id="zero" num="0" input={input} setter={setInput}/>
          
          <Decimal setInput={setInput} input={input} />

          <Negative setInput={setInput} negative={negative} setNegative={setNegative} />
          
          <Operator id="add" content="+" evalArray={evalArray} setEvalArray={setEvalArray} setOutput={setOutput} setNegative={setNegative} setInput={setInput} input={input} />
          
          <Operator id="subtract" content="-" evalArray={evalArray} setEvalArray={setEvalArray} setOutput={setOutput} setNegative={setNegative} setInput={setInput} input={input} />
          
          <Operator id="multiply" content="*" evalArray={evalArray} setEvalArray={setEvalArray} setOutput={setOutput} setNegative={setNegative} setInput={setInput} input={input} />
          
          <Operator id="divide" content="/" evalArray={evalArray} setEvalArray={setEvalArray} setOutput={setOutput} setNegative={setNegative} setInput={setInput} input={input} />
          
          <Clear setInput={setInput} setOutput={setOutput} setEvalArray={setEvalArray} />
          
          <Equals input={input} setInput={setInput} evalArray={evalArray} setEvalArray={setEvalArray} setOutput={setOutput} />
        </div>
      </div>
    </div>
  )
}

export default App
