import React, { useContext } from 'react';

import Home from './components/Home/Home';
import Garage from './components/Garage/Garage';
import Header from './components/Header/Header';
import AuthContext from './store/auth-context';
import CarsProvider from './store/CarsProvider';
function App(props) {
  const ctx = useContext(AuthContext);

  return (
    <CarsProvider>
      <Header />
      <main>
        {!ctx.isLoggedIn && <Home />}
        {ctx.isLoggedIn && <Garage />}
      </main>
    </CarsProvider>
  );
}

export default App;
