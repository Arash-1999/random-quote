import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Quote from './quote/quote.js';
import ButtonHolder from './buttonHolder/buttonHolder.js';

const url = 'https://api.quotable.io';

class App extends Component{
  state = {
    quote: 'Think of how stupid the average person is, and realize half of them are stupider than that.',
    author: 'George Carlin'
  }

  handleClick = () => {
    fetch(url + '/random')
      .then(response => response.json())
      .then(data => {
        this.setState({
          quote: data.content,
          author: data.author
        });
      })
      .catch(err => console.log('oops', err));
  }

  render(){
    return(
      <div className="card">
        <Quote
          quote={this.state.quote}
          author={this.state.author}/>
        <ButtonHolder clicked={this.handleClick}/>
      </div>
    );
  };
};

ReactDOM.render(<App />, document.getElementById("root"));
