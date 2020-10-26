import React from 'react';
import DisplayQuotes from './components/DisplayQuotes';
import './App.css';
import axios from 'axios';

const sampleQuote = {
  quote: "Shoplifting is a victimless crime, like punching someone in the dark.",
  character: "Nelson Muntz",
  image : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: sampleQuote  
    };
  }

  getQuote = () => {
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then(response => response.data)
      .then(data => {
        console.log(data);
        this.setState({
          quote: data[0]
        });
      });
  }

  render() {
    return (
      <div className="App">
        <DisplayQuotes quote={this.state.quote} />
        <button type="button" onClick={this.getQuote}>
          Get new quote
          </button>
      </div>
    );
  }
}

export default App;
