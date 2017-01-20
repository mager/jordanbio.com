import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>jordanbio.com is coming soon</h2>
                </div>
                <div className="App-body">
                    <p>In the meantime, buy the book:</p>
                    <p><a href="https://www.amazon.com/Michael-Jordan-Life-Roland-Lazenby/dp/031619476X"><img src="https://images-na.ssl-images-amazon.com/images/I/51q6AsIhA1L._SX323_BO1,204,203,200_.jpg" alt="Michael Jordan: The Life"/></a></p>
                </div>
                <div className="App-footer">
                    <p>Follow <a href="http://twitter.com/lazenby">@lazenby</a> on Twitter | &copy; Roland Lazenby</p>
                </div>
            </div>
        );
    }
}

export default App;
