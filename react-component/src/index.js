import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ClassComponent from './ClassComponent';
import {StatelessComponent} from './StatelessComponent';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<ClassComponent />, document.getElementById('root'));
ReactDOM.render(StatelessComponent() , document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
