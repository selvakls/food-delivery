import React from 'react';
import ReactDOM from 'react-dom';
import Table from './data-table';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Table />, div);
  ReactDOM.unmountComponentAtNode(div);
});