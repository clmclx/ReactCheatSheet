import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ClassComponent from './ClassComponent';
import {StatelessComponent} from './StatelessComponent';
import * as serviceWorker from './serviceWorker';


// the next render the react components in the dom either as a class component or as a function component. Comment out one and uncomment the other one to see the difference ( It should not be much :-))
// ReactDOM.render(<ClassComponent />, document.getElementById('root'));
ReactDOM.render(StatelessComponent() , document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
