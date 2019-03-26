import React, { Component } from 'react';
import './App.css';
// import coin from './coin.svg';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        display: 'Click Me To Show Heads or Tails'
    }
    this.coinToss = this.coinToss.bind(this);
  }

  // componentDidMount() {
  //   this.setState = {
  //     result: this.coinToss
  //   }
  // }
  
  coinToss(){
    let coin = ['heads','tails']
    let toss = Math.floor(Math.random() * 2) //randomly access indexes 0 to 1
    // console.log(toss)//printing index randomly as expected to console
    return document.getElementById('resultText').innerHTML=coin[toss]
    //printing coin sides randomly to console as expected
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <p>{this.state.display}</p>
        <p id='resultText'>{this.setState.result}</p>
        {/* <img src={coin} className="App-logo" alt="logo" /> */}
        {/* <p>quarter needs to be according to state</p>*/}
          <button onClick={this.coinToss}>Flip Coin</button> 
        </header>
      </div>
    );
  }
}



export default App;
