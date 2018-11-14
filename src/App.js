import React, { Component } from 'react';

import './App.css';
import Flip from './components/flippy/Flip';
// import Flip2 from './components/flippy/Flip2';
// import Flip3 from './components/flippy/Flip3';
// import Cube2 from './components/cube2/cube2';
// import Cube1 from './components/cube/cube1';
// import Cube3 from './components/cube3/cube3';
import AppSlider from './components/slider/slider';
// import Form from './components/contactform/form';
// import Carousel from './components/carousel/index.js';
//import CarouselPage from './containers/CarouselPage/index.js';

class App extends Component {
  render() {
    return (
      <div className="body">
        <header className="App">
          {/* <div class="dashed-box"> */}
            {/* <span class="gold-box"></span> */}
            <div class="_box">
              <div className="card bg-transparent text-white">
              {/* <img class="card-img" src="..." alt="Card image"></img> */}
                <div className="card-img-overlay">
                  <h1 className="box-header">Gerhard Mare</h1>
                  <p className="box-text1">WEB DEVELOPER / DESIGNER</p>
                  <p className="box-text2">Passionate about building meaningful experiences for users.</p>
                  <hr />
                  <hr />
                  <a className="row justify-content-center" href="mailto:gerhard.mare@webcage.co.za"><button type="button" class="btn btn-outline-light">CONTACT ME</button></a>
                </div>
                {/* <div>
                <button type="button" class="btn btn-outline-light">Light</button>
                </div> */}
              </div>
            </div>
          {/* </div> */}
          
          {/* <div className="row "> */}
            
           
          {/* </div> */}
          {/* <div className="row App-card">
            <div className="col-sm-6 ">
              <img src="" style={{ maxWidth: '100%', maxHeight: '100%' }} alt="landing" />
            </div>
            <div className="col-sm-6">
              
            </div> */}
              {/* <div className="mx-auto">
                <h1 class="display-4">Gerhard Mare</h1>
                <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr class="my-4" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p class="lead">
                  <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p>
              </div> */}
            {/* </div> 
          </div> */}
        </header>

        <div id="container">
          <AppSlider />            
        </div>
        <div id="container">
          <Flip />            
        </div>
        {/* <div id="container">
          <Form />            
        </div> */}
 
      </div>
    );
  }
}

export default App;
