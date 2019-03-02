import React from 'react';
import ReactDOM from 'react-dom';
import ClassComponent from './ClassComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ClassComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
