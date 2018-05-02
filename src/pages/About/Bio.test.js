import React from 'react';
import ReactDOM from 'react-dom';
import Bio from './Bio';
import { mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Bio />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders an avatar', () => {
  const wrapper = mount(
    <Bio avatar='/mike.jpg' name="Mike">
      lorem ipsum
    </Bio>
  );
  expect(wrapper).toMatchSnapshot();
})
