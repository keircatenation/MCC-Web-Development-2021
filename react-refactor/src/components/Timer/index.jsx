import { useState, useEffect } from 'react'

export default function Timer(props) {
    const [time, setTime] = useState(0);
    useEffect(() => {
        let interval = setInterval(() => setTime(prev => prev+1), 1000); 
    
        return () => {
          // setInterval cleared when component unmounts
          clearInterval(interval);
        }
      }, [])

    return (
        <div>Timer counting up: {time}</div>
    )

}