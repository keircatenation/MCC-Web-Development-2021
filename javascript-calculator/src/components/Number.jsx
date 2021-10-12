export default function Number(props) {
    const numberPress = (e) => {
        props.setter(prev => {
          if (props.input) {
            if (props.input=="0" && e.target.innerText=="0"){
              return prev
            }
            return prev + e.target.innerText
          } else {
            return e.target.innerText
          }
        })
      }

    return (
        <button id={props.id} onClick={numberPress}>{props.num}</button>
    )

}