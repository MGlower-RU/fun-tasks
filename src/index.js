import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import MainContext from './components/MainContext';

ReactDOM.render(
  <React.StrictMode>
    <MainContext>
      <App />
    </MainContext>
  </React.StrictMode>,
  document.getElementById('root')
);