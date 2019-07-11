import React, {Component} from 'react';

class Ticker extends Component {
  constructor(){
    super();
    this.state = {
      count:0
    }
  }

  componentDidMount(){
    setInterval(()=>{
      this.setState({count: this.state.count+1})
    },1000)
    
  }
  
  reset = () =>{
    this.setState({count: 0})
  }

  render(){
    return(
      <div>
      Ticker: {this.state.count}
      <button onClick={this.reset}>Reset Counter</button>
      </div>
    )
  }
}

export default Ticker;
