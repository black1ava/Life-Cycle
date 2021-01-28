import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
   state = {
      favColor: "Red"
  }
    
  componentDidMount(){
    setTimeout(() => {
      this.setState({ favColor: "Green" })
    }, 1000)
  }
  
  getSnapshotBeforeUpdate(prevProp, prevState){
    document.getElementById("div1").innerHTML = `Befor update, it was ${prevState.favColor}`
  }
  
  componentDidUpdate(){
    document.getElementById("div2").innerHTML = `The updated is ${this.state.favColor}`
  }
  render(){
    return(
      <div>
        <h1>
          My favorite color {this.state.favColor}
        </h1>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)