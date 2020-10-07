import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from './lib';
import './Flip.css';
import header_pp from './media/header_pp.png';

const FlippyStyle = {
  width: '90%',
  height: '500px',
  textAlign: 'center',
  color: '#FFF',
  fontFamily: 'sans-serif',
  justifyContent: 'center'
}

const DefaultCardContents = ({ children }) => (
  <React.Fragment>
    <FrontSide
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
      <img src={header_pp} style={{ width: '50%', maxHeight: '90%' }} className="rounded-bottom" alt="landing" />
      <hr />
      <h1>More About Me...</h1>
      <span
        className="mytext">
        {children}<br />
      </span>
    </FrontSide>
    <BackSide
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column', 
      }}>
      <p>I am a very curious person and also sure that is the reason why I started my career in IT because there is always samething new to learn.</p>
      <p>My career started as a technician in IT and Office Automation and slowly converted as a Web Developer over time as I got more and more interested and finally found something I love.</p>
      <p>Accept for as much as I enjoy spending time behind my computer, I enjoy the outdoors and endurance sport just as much.</p>
      <span
        style={{
          fontSize: '12px',
          position: 'absolute',
          bottom: '10px',
          width: '100%'
        }}>
        {children}<br />
      </span>
    </BackSide>
  </React.Fragment>);

const FlippyOnHover = ({ flipDirection = 'vertical' }) => (
  <Flippy
    flipOnHover={true}
    flipDirection={flipDirection}
    style={FlippyStyle}>
  
    <DefaultCardContents>
    </DefaultCardContents>
  </Flippy>
);

class Flip1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false
    };
  }

  render() {
    return (
      <div className="Flip">
        <div style={{ display: 'flex', flex: '1 0 300px', justifyContent: 'space-around', 'flex-wrap': 'wrap' }}>
           <FlippyOnHover />
        </div>
      </div>
    );
  }
}

export default Flip1;