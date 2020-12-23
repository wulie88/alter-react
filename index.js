import React from './lib/areact' 
import ReactDOM from './lib/areact-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '张三',
      job: '后端工程师',
      hobby: '看电影'
    }
  }
  render() {
    return (
      <div className="wrapper">
        <h1 className="title">hello <span>{ this.state.name }</span></h1>
        <p>hobby: { this.state.hobby }</p>
        <Job job={ this.state.job }></Job>
        <Hobby hobby={ this.state.hobby }></Hobby>
      </div>
    )
  }
}

class Job extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '小讲堂',
      courses: ['数学', '语文', '英语'],
      styleObj: {
        color: 'red',
        fontWeight: 'bold'
      }
    }
  }
  
  render() {
    return (
      <div className="job">
        <h1>欢迎到<span className="name" style={ this.state.styleObj }>{ this.state.name }</span>来学习</h1>
        <p>我的工作是{ this.props.job }</p>
        <button onClick = { this.modifyName.bind(this) }>修改名字</button>
        <button onClick = { this.setStyle.bind(this) }>样式</button>
      </div>
    )
  }
  modifyName() {
    let newName = window.prompt('输入标题','小讲堂')
    this.setState({name: newName})
  }

  setStyle() {
    this.setState({
      styleObj: {
        color: 'blue'
      }
    })
  }
}

function Hobby(props) {
  return (
    <p>我的兴趣是{ props.hobby }</p>
  )
}

ReactDOM.render(<App></App>, document.querySelector('#app'))