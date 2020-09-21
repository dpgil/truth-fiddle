import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Broken somehow by https://github.com/avadavat/truth-fiddle/pull/55
// https://stackoverflow.com/questions/21572682/createtextrange-is-not-working-in-chrome/41743191
it.skip('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
