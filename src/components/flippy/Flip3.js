import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from './lib';

import './Flip.css';


const FlippyStyle = {
  width: '90%',
  height: '300px',
  textAlign: 'center',
  color: '#FFF',
  fontFamily: 'sans-serif',
  fontSize: '30px',
  justifyContent: 'center'
}

const DefaultCardContents = ({ children }) => (
  <React.Fragment>
    <FrontSide
      style={{
        backgroundColor: '#41669d',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
      <p className="h4"></p>
      
      <span
        style={{
          fontSize: '12px',
          position: 'absolute',
          bottom: '10px',
          width: '100%'
        }}>
        {children}<br />
      </span>
    </FrontSide>
    <BackSide
      style={{
        backgroundColor: '#175852',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
      ROCKS
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
    style={FlippyStyle}
  >
    <DefaultCardContents>
      {/* I flip {flipDirection}ly on hover */}
    </DefaultCardContents>
  </Flippy>
);

// const FlippyOnClick = ({ flipDirection = 'vertical' }) => (
//   <Flippy
//     flipOnClick={true}
//     flipDirection={flipDirection}
//     style={FlippyStyle}
//   >
//     <DefaultCardContents>
//       I flip {flipDirection}ly on click
//     </DefaultCardContents>
//   </Flippy>
// );

// const ControlledFlippy = ({ isFlipped }) => (
//   <Flippy
//     flipDirection="vertical"
//     isFlipped={isFlipped}
//     style={FlippyStyle}
//   >
//     <DefaultCardContents>
//       I flip vertically for every 3sec. I am controlling by a upper scope.
//     </DefaultCardContents>
//   </Flippy>
// );

class Flip3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false
    };

    // setInterval(() => {
    //   this.setState({
    //     isFlipped: !this.state.isFlipped
    //   });
    // }, 3000);
  }

  render() {
    return (
      <div className="Flip">
        <div style={{ display: 'flex', flex: '1 0 200px', justifyContent: 'space-around', 'flex-wrap': 'wrap' }}>
          <FlippyOnHover flipDirection="horizontal" />
          {/* <FlippyOnClick flipDirection="horizontal" /> */}
          {/* <FlippyOnHover /> */}
          {/* <FlippyOnClick /> */}
          {/* <ControlledFlippy
            isFlipped={this.state.isFlipped}
          /> */}
        </div>
      </div>
    );
  }
}

export default Flip3;