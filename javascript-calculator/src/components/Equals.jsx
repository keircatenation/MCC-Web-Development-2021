import {evaluate} from 'mathjs'

export default function Equals(props) {
    const {input, evalArray, setOutput, setEvalArray, setInput} = props;

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

    return (
        <button id="equals" className="operator" onClick={(e) => {if (input) { handleEquals(e) }}}>=</button>
    )

}