import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Garage from './pages/Garage';
import AuthContext from './store/auth-context';
import Account from './pages/Account';
import Registration from './components/Login/Registration';
import Layout from './components/Layout/Layout';

function App() {
  const ctx = useContext(AuthContext);

  return (
    <Layout>
      <Routes>
        <Route path="/account" element={<Account/>}/>
        <Route path="/registration" element={<Registration />} />
        <Route path="/" element={!ctx.isLoggedIn && <Home />}/>
        <Route path="/garage" element={ctx.isLoggedIn && <Garage />}/>
      </Routes>
    </Layout>
  );
}

export default App;
