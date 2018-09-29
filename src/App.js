import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">

          <div className='row'>
            <div className="col-12">
              <p>Sell Your Mac</p>
            </div>
          </div>

          <div className='row'>
            <div class="col-12" id="nav">
              <ul>
                <li>Macbook Pro</li>
                <li>Macbook Air</li>
                <li>Macbook</li>
                <li>iMac</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
