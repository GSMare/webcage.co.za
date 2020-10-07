import React, { Component } from 'react';
import Flip1 from './Flip1';

class Flip extends Component {
  render() {
    return (
      <div id="container_flip" className="flex">
        <div className="row justify-content-md-center">
          <div className="col-10">
            <Flip1 />
          </div>
        
        </div>
    </div>
    );
  }
}

export default Flip;