import React from 'react';
import ReactDOM from 'react-dom';
import BuildLog from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BuildLog />, div);
  ReactDOM.unmountComponentAtNode(div);
});
