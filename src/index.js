import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import './node_modules/bootstrap/dist/css/bootstrap.css';
//import reactstrap from './node_modules/reactstrap/dist/reactstrap';
import App from './App';
import * as serviceWorker from './serviceWorker';

//import AppSlider from './components/slider/slider';
//import Carousel from './components/carousel/index';

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDom.render(<AppSlider />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
