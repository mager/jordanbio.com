import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>jordanbio.com is coming soon</h2>
        </div>
        <p className="App-intro">In the meantime, buy the book:</p>
            <a href="https://www.amazon.com/Michael-Jordan-Life-Roland-Lazenby/dp/031619476X"><img src="https://images-na.ssl-images-amazon.com/images/I/51q6AsIhA1L._SX323_BO1,204,203,200_.jpg" /></a>
      </div>
    );
  }
}

export default App;
