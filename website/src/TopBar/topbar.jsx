import React, { Component } from 'react';
import './topbar.css';


class TopBar extends Component {
  render() {
    return ( 
      <div>
        <div className = "topbar">
        <div className = "title">
            andrew lieu
        </div>
        <div className = "title-directory">
            <a href = "#abtme">about me </a> | 
            <a href = "#exp"> experience </a> | 
            <a href = "#proj"> projects </a> | 
            <a href = "#mis"> misc </a> 
        </div>
        <div className = "information">
          <div className = "information-text">
            computer science
          </div>
          <div className = "information-text">
            andrewlieu@berkeley.edu
          </div>
          <div className = "information-text">
            (626) 278-1356
          </div>
        </div>



        </div>

      </div>
    )
    }
}

export default TopBar;

