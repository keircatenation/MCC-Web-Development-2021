export default function Operator(props) {
    const {setEvalArray, evalArray, setOutput, setNegative, input, setInput} = props;
    
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

    return (
        <button id={props.id} className="operator" onClick={operatorPress}>{props.content}</button>
    )

}