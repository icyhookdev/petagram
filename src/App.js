import React from 'react';
import { Router } from '@reach/router';
import Logo from './components/Logo/Logo';
// import GetPhotoCardDetails from './container/getPhotoCardDetails';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Navbar from './components/Navbar/Navbar';

const App = () => (
  <>
    <Logo />

    <Router>
      <Home path="/" />
      <Home path="/pet/:id" />
      <Detail path="/detail/:detailId" />
    </Router>
    <Navbar />
  </>
);

export default App;
