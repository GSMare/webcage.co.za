import React, { Component } from 'react';

import './App.css';
import Flip from './components/flippy/Flip';
import AppSlider from './components/slider/slider';

class App extends Component {
  render() {
    return (
     
      <div className="body">
        <header className="App">
          <div>
  
                  <h1 id="h1" className="box-header">Gerhard Mare</h1>
                  <p className="box-text1">WEB DEVELOPER / DESIGNER</p><br></br>
                  <p className="box-text2">Passionate about building meaningful experiences for users.</p>
                  <hr />
                  <hr />
                  <a className="row justify-content-center" href="mailto:gerhard.mare@webcage.co.za"><button type="button" class="btn btn-outline-light">CONTACT ME</button></a>
      
          </div>
        </header>
        
        <div id="container">
          <AppSlider />            
        </div>
        <div id="container">
          <Flip />            
        </div>
    
      </div>
    );
  }
}

export default App;
