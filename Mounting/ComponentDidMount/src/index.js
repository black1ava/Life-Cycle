import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
  
  state = {
    favouriteColor: "Red"
  }
  
  componentDidMount(){
    /setTimeout(() => this.setState({
      favouriteColor: "yellow"
    }), 1000)
    /*this.setState({
      favouriteColor: "Yellow"
    })
    output :
    Red 
    Yellow
    */
  }
  
  render(){
    console.log(this.state.favouriteColor)
    return(
      <h1>
        My favourite color is {this.state.favouriteColor}
      </h1>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)