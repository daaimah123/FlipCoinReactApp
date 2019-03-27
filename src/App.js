import React, { Component } from 'react';
import './App.css';
var request = require('request');


// var FetchStream = require("fetch").FetchStream;

// import coin from './coin.svg';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        display: 'Click Me To Show Heads or Tails',
        item: []
    }
    this.coinToss = this.coinToss.bind(this);
  }

  componentDidMount() {
    this.setState = {
      result: this.coinToss
    }
  }

  

  starWarsAPI(){
    request('https://swapi.co/api/planets/', function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the HTML for the Google homepage.
    });
  }



//TODO: change head and tail string into words
  coinToss(){
    //head image
    // const headsImage = new Image(100, 200);
    // headsImage.src = './us-quarter-front.jpg';
    // const heads = document.body.appendChild(headsImage);
    //tail image
    // var tailImage = new Image(100, 200);
    // tailImage.src = './us-quarter-back.jpg';
    // const tails = document.body.appendChild(tailImage);
    let coin = ['heads', 'tails']
    let toss = Math.floor(Math.random() * 2) //randomly access indexes 0 to 1
    // console.log(toss)//printing index randomly as expected to console
    return document.getElementById('resultText').innerHTML=coin[toss]
    //printing coin sides randomly to console as expected
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <p>{this.starWarsAPI}</p>
        <p>{this.state.display}</p>
        <p id='resultText'>{this.setState.result}</p>
        {/* <img src={coin} className="App-logo" alt="logo" /> */}
        {/* <p>quarter needs to be according to state</p>*/}
          <button onClick={this.coinToss}>Flip Coin</button> 
          <p id='starWars'></p>
        </header>
      </div>
    );
  }
}



export default App;
