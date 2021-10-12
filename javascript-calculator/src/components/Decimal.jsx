export default function Decimal(props) {
    const {setInput, input} = props;

    const decimalPress = e => {
        // console.log(e.target.innerText)
        let regex = /\./g;
        if (!input.match(regex)) {
          setInput(prev => prev + e.target.innerText)
          // console.log("decimal")
        }
    }

    return (
        <button id="decimal" onClick={decimalPress}>.</button>
    )

}