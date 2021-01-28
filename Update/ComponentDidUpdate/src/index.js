import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
  state = { favColor: "Red" }
  
  componentDidMount(){
    setTimeout(() => {
       this.setState({ favColor: "Green" })
    }, 1000);
  }
  
  componentDidUpdate(){
    document.getElementById("div").innerHTML = `The updated color is ${this.state.favColor}`
  }
  
  render(){
    return(
      <div>
        <h1>
          My favourite color is {this.state.favColor}
        </h1>
        <div id="div"></div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)