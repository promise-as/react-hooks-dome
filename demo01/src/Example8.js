import React, { useRef, useState , useEffect } from 'react';

function Example8(){
  const inputEl = useRef(null)
  const onButtonClick = () => {
    inputEl.current.value = 'Hello, HBJ'
    // console.log(inputEl);
  }

  const [text, setText] = useState('hbj')
  const textRef = useRef();

  useEffect(() => {
    textRef.current = text
    console.log(textRef.current, 111);
    
  })

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>在 input 上展示文字</button>
      <br/>
      <input value={text} onChange={(e) => setText(e.target.value)} type="text"/>
    </>
  )
}

export default Example8