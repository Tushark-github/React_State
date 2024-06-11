import { useState } from "react"

export default function UsingState() {
  const setCount = () => setNum(num + 1);
  const [num, setNum] = useState(0);
  return (
    <div>
      <p>Count is {num} </p>
      <button onClick={setCount}>Click</button>
    </div>
  )
}