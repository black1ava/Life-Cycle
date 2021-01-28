import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
  state = { show: true}
  
  end = () => {
    this.setState({ show: false })
  }
  render(){
    let showIt

    if(this.state.show){
      showIt = <Child />
    }
    return(
      <div>
        {showIt}
        <button onClick={this.end}>
          End it 
        </button>
      </div>
    )
  }
}

class Child extends React.Component{
  componentWillUnmount(){
    alert("Show ends")
  }
  
  render(){
    return(
      <div>
        <h1>Hello Word</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)