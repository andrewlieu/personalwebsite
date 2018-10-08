import React, { Component } from 'react';
import './App.css';
import TopBar from './TopBar/topbar';
import CenterBox from './CenterBox/centerbox';
import {BrowserRouter,Route} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="App">
          </div>
          <Route path="/" component= {TopBar}/>
          <Route path ="/" component= {CenterBox}/>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
