import React, { useState, useEffect } from 'react';

function Example() {
  // 等同与下面一行 es5
  // let _useState = useState(0)
  // let count = _useState[0]
  // let setState = _useState[1]

  // 声明一个新的叫做 “count” 的 state 变量 es6
  const [count, setCount] = useState(0); // 数组结构

  useEffect(() => {
    console.log(`useEffect => You clicked ${count} times`);
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Example;