import React from 'react';
import { Link } from 'react-router-dom';

import Login from '../components/Login/Login';
import Card from '../components/UI/Card/Card';
import Content from '../components/UI/Card/Content';

const Account = () => {
  return (
    <Card>
      <Login />
      <Content>
        <Link to="/registration" className="link">
          Registration
        </Link>
      </Content>
    </Card>
  );
};

export default Account;
