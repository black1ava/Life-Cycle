import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
  state = { favoritecolor: "Red" }
  static getDerivedStateFromProps(props, state) {
    return {favoritecolor: props.favcol };
  }
  
  render(){
    console.log(this.state.favoritecolor)
    return(
      <h1> 
        My favourite color is { this.state.favoritecolor } 
      </h1>
    )
  }
}

ReactDOM.render(
  <App favcol="Yellow"/>,
  document.getElementById('app')
)