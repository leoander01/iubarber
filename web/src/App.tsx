import React from 'react';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
import GlobalStyle from './styles/global';

import AppPRovider from './hooks';

const App: React.FC = () => (
  <>
    <AppPRovider>
        <SignIn />
    </AppPRovider>

    <GlobalStyle />
  </>
);

export default App;
