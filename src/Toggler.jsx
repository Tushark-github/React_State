import { useState } from "react"

export default function Toggler() {
  const [set, setToggle] = useState(false);
  const Toggling = () => {
    setToggle(!set);
  }
  return (

    <div>
      <p>{set ? "	😓" : "😀"}</p>
      <button onClick={Toggling}>Toggle</button>
    </div>
  )
}