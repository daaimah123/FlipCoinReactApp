import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //       isLoading: false, 
  //       quarter: 'heads',
  //       // url: google.com,//pic of image head
  //   }

  // }

  // //FIXME: make sure quarter populates to random heads or tails
  // coinToss () {
  //   // This function will randomly return either 'heads' or 'tails'.
  //   return Math.random() < 0.5 ? 'heads' : 'tails';
  //   this.setState = {
  //     isLoading: true,
  //     quarter: 'tails'
  //   }
  // }

  //TODO: need to drop this inside a function that can be referenced by an onClick event for flip button
  // // if/else statement begins here:
  // if (coinToss() == "heads") {
  //   var img = <img src={pics.kitty} />;
  // } else {
  //   var img = <img src={pics.doggy} />;
  // }


  render() {
    return (
      <div className="App">
        <header className="App-header">
        {/* <p>quarter needs to be according to state</p>
          <button onClick={this.coinToss}>Flip Coin</button> */}
        </header>
      </div>
    );
  }
}



export default App;
