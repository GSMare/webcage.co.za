import React, { Component } from 'react';

import './App.css';

import AppSlider from './components/slider/slider';
import ProfilePic from './media/header_pp.png';

class App extends Component {
  render() {
    return (

      <div className="body">
        <header className="App">
            <div className="_box">
              {/* <div className="card bg-transparent text-white"> */}
                {/* <div className="card-img-overlay"> */}
                  <h1 className="box-header">Gerhard Mare</h1>
                  <p className="box-text1">WEB DEVELOPER / DESIGNER</p>
                  <p className="box-text2">Passionate about building meaningful experiences for users.</p>
                  <hr />
                  <hr />
                  <div style={{display: 'dlex', flexDirection: 'row', justifyContent: 'center', textAlign: 'center'}}>
                   <a className="btn btn-outline-light" href="mailto:gerhard.mare@webcage.co.za">CONTACT ME</a>
                  </div>
              
                {/* </div> */}
              {/* </div> */}
            </div>
        </header>
<footer>
<img id='profilePic' src={ProfilePic} alt={'Gerhard Maré'} />
</footer>
        <div id="container">
          <AppSlider />            
        </div>
        

    

      </div>
      
    );
  }
}

export default App;
