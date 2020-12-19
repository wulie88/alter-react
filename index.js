import React from './lib/areact' 
import ReactDOM from './lib/areact-dom'

class Job extends React.Component {
  render() {
    return (
      <div className="job">我的工作是前端工程师</div>
    )
  }
}

function Button() {
  const style = {
    background: 'salmon'
  }

  return (
    <button style = { style }>Button</button>
  )
}

let num = 0
let timer = null
let styleObj = {
  color: 'red',
  fontSize: '20px'
}

onStart() //一开始时执行

function onStart() {
  console.log('click me')
  timer = setInterval(() => { //启动时，每秒钟计时一次，做一次渲染
    num++
    ReactDOM.render((
      <div className="wrapper">
        <Job></Job>
        <h1 style = { styleObj }>Number: { num }</h1>
        <Button onClick = { onStart }>start</Button>
        <button onClick = { onPause }>pause</button>
      </div>
    ), document.querySelector('#app'))
  }, 1000)
}

function onPause() {
  clearInterval(timer) //点击停止时，清除定时器
}