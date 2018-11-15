import React, { Component } from 'react';
import Flip1 from './Flip1';
import Flip2 from './Flip2';
import Flip3 from './Flip3';

class Flip extends Component {
  render() {
    return (
      <div id="container_flip" className="flex">
        <div className="row justify-content-md-center">
          <div className="col-10">
            <Flip1 />
          </div>
          <div className="col-sm-6">
            <Flip2 />
          </div>
          <div className="col-sm-6">
            <Flip3 />
          </div>
        </div>
    </div>
    );
  }
}

export default Flip;