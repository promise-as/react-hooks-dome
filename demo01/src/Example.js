import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Index() {
  useEffect(() => { console.log(useEffect => '老弟，你来了！Index页面') })
  return <h2>hbj.com</h2>
}

function List() {
  useEffect(() => { console.log(useEffect => '老弟，你来了！List页面') })
  return <h2>List Page</h2>
}

function Example() {
  // 等同与下面一行 es5
  // let _useState = useState(0)
  // let count = _useState[0]
  // let setState = _useState[1]

  // 声明一个新的叫做 “count” 的 state 变量 es6
  const [count, setCount] = useState(0); // 数组结构

  useEffect(() => {
    console.log(`useEffect => You clicked ${count} times`);
    return () => {
      console.log('========');
    }
  }, [count])

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <Router>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/list/">列表</Link></li>

        <Route path="/" exact component={Index} />
        <Route path="/list/" exact component={List} />
      </Router>

    </div>
  );
}

export default Example;