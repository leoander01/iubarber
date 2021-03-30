import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import AppPRovider from './hooks';

import Routes from './routes';

const App: React.FC = () => (
  <Router>
    <AppPRovider>
        <Routes />
    </AppPRovider>

    <GlobalStyle />
  </Router>
);

export default App;
