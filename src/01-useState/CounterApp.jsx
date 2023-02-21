import { useState } from "react"



export const CounterApp = () => {

    const [counter, setCounter] = useState(10)
    const [counterTwo, setCounterTwo] = useState(20)
    const [counterThree, setCounterThree] = useState(30)



  return (
    <>
    <h1> Counter1: {counter} </h1>
    <h1> Counter2: {counterTwo} </h1>
    <h1> Counter3: {counterThree} </h1>
    <hr />

    <button className="btn" onClick={()=> setCounter(counter + 1)}> +1 </button>
 
    </>
  )
}
