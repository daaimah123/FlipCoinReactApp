import React, { Component } from 'react';
import './style.css';
// var request = require('request');

// var FetchStream = require("fetch").FetchStream;

// import coin from './coin.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coinPic: '',
      display: 'Click Me To Show Heads or Tails',
      external: {}, //empty obj to state that there will be obj data eventually
    }
    // this.handleTextChange = this.handleTextChange.bind(this);
    // this.starWarsAPI = this.starWarsAPI.bind(this);
    // this.coinToss = this.coinToss.bind(this);
  }

  componentDidMount = () => {
    this.setState ({
      coin: this.coinToss,
      value: ''
    })
  }

  //will handle input text from textbox
  handleTextChange = (input) => {
    this.setState(
      {value: input.target.value} //id number typed into value box 
      );
  }

  starWarsAPI = () => {//id established for when input is saved and used to return id planet
    fetch(`https://swapi.co/api/planets/${this.state.value}`)
    .then(res => res.json())
    .then(body => {
      this.setState({external: body});
    console.log({body})
    })
    // request(`https://swapi.co/api/planets/${this.state.value}`, function (error, response, body) {
    //   console.log('error:', error); // Print the error if one occurred
    //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //   console.log('body:', body); // Print the HTML from request.
    //   //FIXME: currently printing out full body instead of specific information
    //   document.getElementById('starWars').innerHTML=body; //SUCCESS: Printing to page as expected
    //   console.log(`this: ${this}`)
    //   this.setState({external: body})
    // });
  }

//TODO: change head and tail string into words
// head image
    // const headsImage = new Image(100, 200);
    // headsImage.src = './us-quarter-front.jpg';
    // const heads = document.body.appendChild(headsImage);
    // // tail image
    // var tailImage = new Image(100, 200);
    // tailImage.src = './us-quarter-back.jpg';
    // const tails = document.body.appendChild(tailImage);
  coinToss(){
    let coin = ['heads', 'tails']
    let toss = Math.floor(Math.random() * 2) //randomly access indexes 0 to 1
    // console.log(toss)//printing index randomly as expected to console
    //printing coin sides randomly to console as expected
    this.setState({
      display: 'Click again to see what you get!'
    })
    if (coin[toss] === 'tails'){
      this.setState({coinPic: './us-quarter-back.jpg', alt: 'back of US quarter'})
    } else {
      this.setState({coinPic: './us-quarter-front.jpg', alt: 'front of US quarter'})
    }


    // return document.getElementById('resultText').innerHTML=coin[toss]
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <p>{this.state.display}</p>
        <p id='resultText'>{this.setState.coin}</p>
        <img src={this.state.coinPic} height={100} width={100} alt={this.state.alt}/>
          <button onClick={this.coinToss}>Flip Coin</button> 
          {/* ref={input => # = input} */}
        <hr/><br/><br/><br/>
          <form>
              <textarea placeholder="Enter A Planet Number" value={this.state.value} onChange={this.handleTextChange} />
          </form>
          <p id='starWars'>Planet Name: {this.state.external.name}<br/>Climate: {this.state.external.climate} <br/>Terrain: {this.state.external.terrain}</p>
          <button onClick={()=>this.starWarsAPI()}>Get Planet Details</button>
        </header>
      </div>
    );
  }
}

export default App;
