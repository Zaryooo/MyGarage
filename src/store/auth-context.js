import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const storedUserLogInfo = localStorage.getItem('isLoggedIn');

    if (storedUserLogInfo === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    setIsLogin(false);
  };

  const loginHandler = () => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const btnLoginHadler = () => {
    setIsLogin(true);
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        isLogin: isLogin,
        onLogout: logoutHandler,
        onLogin: loginHandler,
        loginBtn: btnLoginHadler
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
