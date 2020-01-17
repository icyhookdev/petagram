import React from 'react';
import { Helmet } from 'react-helmet';
import { FavsWithQuery } from '../container/GetFavorites';

const Favs = () => (
  <>
    <Helmet>
      <title>Petagram - Favs</title>
      <meta name="description" content="See your favs" />
    </Helmet>
    <h1>FAvs</h1>
    <FavsWithQuery />
  </>
);

export default Favs;
