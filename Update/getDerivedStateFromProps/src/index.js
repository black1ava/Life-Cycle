import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
  state = { favColor: "Red"}
  static getDerivedStateFromProps(props, state){
    return { favColor: props.fav}
  }
  
  handleChange = () => {
    this.setState({ favColor: "Blue " })
  }
  
  render(){
    console.log(this.state.favColor)
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
  <App fav="orange"/>,
  document.getElementById('app')
)