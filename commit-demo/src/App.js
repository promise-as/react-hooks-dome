import React, { useState, useEffect, useRef } from 'react';

function App() {
  // 声明一个新的叫做 “count” 的 state 变量
  // let [list, setList] = useState(null);
  let prevList = [
    { username: '张三', content: 'React不错!' },
    { username: '李四', content: 'React有点难!' }
  ]

  let [list, setList ] = useState(prevList);

  const inputUser = useRef(null);
  const inputContent = useRef(null);

  useEffect(() => {

    setList = () => {
      let username = inputUser.current.value
      let content = inputContent.current.value

      list.unshift({username, content})

      prevList = list

      console.log(list, prevList);
    }

    return () => {
      // console.log(list, prevList);
    }
     
  }, [prevList])

  return (
    <div>
      <header className="site-header jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h1>请发表对React的评论</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="col-md-4">
          <form className="form-horizontal">
            <div className="form-group">
              <label>用户名</label>
              <input ref={inputUser} type="text" className="form-control" placeholder="用户名"/>
            </div>
            <div className="form-group">
              <label>评论内容</label>
              <textarea ref={inputContent} className="form-control" rows="6" placeholder="评论内容"></textarea>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="button" className="btn btn-primary pull-right" onClick={() => setList()}>提交</button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-8">
          <h3 className="reply">评论回复：</h3>
          <h2 style={{ 'display': 'none' }}>暂无评论，点击左侧添加评论！！！</h2>
          <ul className="list-group">
            {
              list.map((item, index) => {
                return (
                  <li className="list-group-item" key={index}>
                    <div className="handle">
                      <span className="btn btn-danger">删除</span>
                    </div>
                    <p className="user"><span >{item.username}</span><span>说:</span></p>
                    <p className="centence">{item.content}</p>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App