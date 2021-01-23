import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppContainer } from 'react-hot-loader';
import reportWebVitals from './reportWebVitals';

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <AppContainer>
        <App />
      </AppContainer>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
render();
// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    render();
  });
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
