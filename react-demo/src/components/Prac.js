import React, {useState, useEffect}  from 'react'

function Prac() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(`document re-rendered`)
        document.title = `you have clicked ${count} times`
    }, [count])

  return (
    <div>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>click me</button>
    </div>
  )
}

export default Prac