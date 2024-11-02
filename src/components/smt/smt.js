import { memo, useCallback, useEffect, useState } from "react";

const Smt = () =>{

const [count, setCount] = useState(0)
const [decCount, setDecCount] = useState(10)

const showCount = useCallback(() => console.log(count), [count]);

useEffect(() =>{
  showCount()
}, [showCount])

  return(
    <div>
      <p>{count}</p>
      <p>Dec Count: {decCount}</p>
      <button onClick={() => setCount(count+1)}>click</button>
      <button onClick={() => setDecCount(decCount-1)}>click</button>
    </div>
  )
}
export default memo(Smt);