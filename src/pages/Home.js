import React from 'react';
import CategoriesList from '../components/CategoriesList/CategoriesList';
import PhotoCardList from '../container/PhotoCardList';

const Home = ({ id }) => (
  <>
    <CategoriesList />
    <PhotoCardList categoryId={id} />
  </>
);

export default Home;
