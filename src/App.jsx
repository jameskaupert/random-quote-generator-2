import React, { Component } from 'react';
import './App.css';
import quotes from './quotes';
import colors from './colors';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: quotes[this.getRandomIndex(quotes)],
      colorTheme: colors[this.getRandomIndex(colors)],
    };
    this.handleNewQuote = this.handleNewQuote.bind(this);
    this.handleTweet = this.handleTweet.bind(this);
  }
  handleNewQuote() {
    this.setState({
      quote: quotes[this.getRandomIndex(quotes)],
      colorTheme: colors[this.getRandomIndex(colors)],
    });
  }
  handleTweet() {
    console.log('handling tweet');
  }
  getRandomIndex(arr) {
    const max = arr.length;
    return Math.floor(Math.random() * max);
  }
  render() {
    let quoteBoxStyle = {
      backgroundColor: `#${this.state.colorTheme}`,
    };
    return (
      <div id="quote-box" className="quote-box" style={quoteBoxStyle}>
        <h1 id="text" className="text">
          {this.state.quote.text}
        </h1>
        <div id="author" className="author">
          - {this.state.quote.author}
        </div>
        <footer className="footer">
          <div className="row1">
            <a
              id="tweet-quote"
              className="tweet-quote footer-btn"
              onClick={this.handleTweet}
              href="https://twitter.com/intent/tweet"
            >
              Tweet Quote
            </a>
            <button id="new-quote" className="new-quote footer-btn" onClick={this.handleNewQuote}>
              New Quote
            </button>
          </div>
          <div className="row2">
            Quotes sourced from the hit TV show <i>Archer</i>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
