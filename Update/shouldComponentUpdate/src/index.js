import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
  state = { favColor: "red" }
  
  handleChange = () => {
    this.setState({ favColor: "Green" })
  }
  
  shouldComponentUpdate(){
    //return false output: nothing is change
    //default value is true
    return true //change Red -> Green
  }
  
  render(){
    return(
      <div>
        <h1>
          My favourite color is {this.state.favColor}
        </h1>
        <button onClick={this.handleChange}>
          Change Color
        </button>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)