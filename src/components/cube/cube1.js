import React, { Component } from "react";
import './cube1.css';

class Cube1 extends Component {
  render() {
    return (
      <page>
        <div classname="container">
          <div className="box-wrapper">
            <div className="box-faces">
              <div className="box-face box-face--is-front1"></div>

              <div className="box-face box-face--is-back1"></div>

              <div className="box-face box-face--is-top1"></div>

              <div className="box-face box-face--is-bottom1"></div>

              <div className="box-face box-face--is-left1"></div>
                      
              <div className="box-face box-face--is-right1"></div>          
            </div>
          </div>
        </div>
      </page>
    );
  }
}

export default Cube1;