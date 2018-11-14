import React, { Component } from "react";
import './cube3.css';


class Cube3 extends Component {
  render() {
    return (
      <page>
        <div classname="container">
          <div className="box-wrapper">
            <div className="box-faces">
              <div className="box-face box-face--is-front3">
                
              </div>

              <div className="box-face box-face--is-back3">
                
              </div>

              <div className="box-face box-face--is-top3">
               
              </div>

              <div className="box-face box-face--is-bottom3">
                
              </div>

              <div className="box-face box-face--is-left3">

              </div>
                
              <div className="box-face box-face--is-right3">

              </div>
            </div>
          </div>
        </div>
      </page>       
    );
  }
}

export default Cube3;