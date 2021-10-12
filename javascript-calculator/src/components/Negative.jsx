export default function Decimal(props) {
    const {setInput, negative, setNegative} = props;

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
        <button id="negative" onClick={negativePress}>+/-</button>
    )

}