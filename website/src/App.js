import React, { Component } from 'react';
import './App.css';
import TopBar from './TopBar/topbar';
import CenterBox from './CenterBox/centerbox';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className = "TopBar">
          <TopBar/>
        </div>
        <div className = "CenterBox">
          <CenterBox /> 
        </div>

      </div>
    );
  }
}

export default App;
