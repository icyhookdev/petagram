import React, { useContext, Suspense } from 'react';
import { Router, Redirect } from '@reach/router';
import Logo from './components/Logo/Logo';
// import GetPhotoCardDetails from './container/getPhotoCardDetails';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Navbar from './components/Navbar/Navbar';
// import Favs from './pages/Favs';
import User from './pages/User';
import Notuser from './pages/NotUser';
import { Context } from './Context';
// import PrivateRoutes from './PrivateRoutes';
import NotFound from './pages/NotFound';

const UserLogged = ({ children }) => children({ isAuth: false });

const Favs = React.lazy(() => import('./pages/Favs'));

const App = () => {
  const { isAuth } = useContext(Context);

  return (
    <Suspense fallback={<div />}>
      <Logo />
      <Router>
        <NotFound default />
        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path="/detail/:detailId" />
        {!isAuth && <Notuser path="/login" />}
        {isAuth && <Redirect from="/login" to="/" noThrow />}
        {!isAuth && <Redirect from="/favs" to="/login" noThrow />}
        {!isAuth && <Redirect from="/user" to="/login" noThrow />}
        <Favs path="/favs" />
        <User path="/user" />
      </Router>
      {/* <PrivateRoutes isAuth={isAuth} /> */}
      <Navbar />
    </Suspense>
  );
};

export default App;
