import React from 'react';
import GlobalStyled from './styles/GlobalStyles'
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
     <GlobalStyled/>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);
