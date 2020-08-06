import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      author: null,
      quote: null,
      index: null
    };

    this.updateQuote = this.updateQuote.bind(this);
    this.getRndInteger = this.getRndInteger.bind(this);
  }

  componentDidMount() {
    this.updateQuote();
    setInterval(this.updateQuote, 5000);
  }

  getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  updateQuote() {
    const quotes = JSON.parse(window.localStorage.getItem('quotes'));
    const index = this.getRndInteger(0, quotes.length);
    const {author, quote} = quotes[index];
    this.setState(state => ({
      isLoading: false,
      author: author,
      quote: quote,
      index: index
    }))
  }

  render() {
    return (
    <p className={'card'}>{`${ this.state.isLoading ? '....': this.state.quote }`}</p>
    )
  }
}

export default Card;