import React, { Component } from "react";
import './cube2.css';


class Cube2 extends Component {
  render() {
    return (
      <page>
        <div classname="container">
          <div className="box-wrapper">
            <div className="box-faces">
              <div className="box-face box-face--is-front"></div>
              <div className="box-face box-face--is-back"></div>
              <div className="box-face box-face--is-top"></div>
              <div className="box-face box-face--is-bottom"></div>
              <div className="box-face box-face--is-left"></div>
              <div className="box-face box-face--is-right"></div>
            </div>
          </div>
        </div>
      </page> 
    );
  }
}

export default Cube2;