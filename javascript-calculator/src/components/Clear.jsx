export default function Clear(props) {
    const {setInput, setOutput, setEvalArray} = props;
    
    const handleClear = () => {
        // console.log("clear")
        setInput("")
        setOutput("0");
        setEvalArray([]);
    }

    return (
        <button id="clear" onClick={handleClear} className="operator">CE</button>
    )

}