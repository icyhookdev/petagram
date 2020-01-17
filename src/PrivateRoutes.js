import React from 'react';
import { Router } from '@reach/router';
// import Favs from '';
import User from './pages/User';

const PrivateRoutes = ({ isAuth }) =>
  (isAuth && (
    <Router>
      <Favs path="/favs" />
      <User path="/user" />
    </Router>
  )) || <div />;

export default PrivateRoutes;
