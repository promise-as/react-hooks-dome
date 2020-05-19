import React, { useState } from 'react';

function App() {
  const [counterOne, setCounterOne] = useState(0)
  const [counterTwo, setCounterTwo] = useState(0)

  const incrementOne = () => {
    setCounterOne(counterOne + 1)
  }

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1)
  }

  const isEven = () => {
    let i = 0
    // while (i < 10000000) i += 1
    return counterOne % 2 === 0
  }

  return (
    <div>
      <button
        onClick={incrementOne}
      >Count One = {counterOne}</button>
      <span>
        {
          isEven() ? 'even' : 'odd'
        }
      </span>
        <br/>
        <button
          onClick={incrementTwo}
        >Count Two = {counterTwo}</button>
    </div>
  )
}

export default App