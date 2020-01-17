import React, { memo } from 'react';
import CategoriesList from '../components/CategoriesList/CategoriesList';
import PhotoCardList from '../container/PhotoCardList';
import Layout from '../components/Layout/Layout';

const Home = ({ id }) => (
  <>
    <Layout title="App" subtitle="Find pet's photos">
      <CategoriesList />
      <PhotoCardList categoryId={id} />
    </Layout>
  </>
);

export default memo(Home, (prevProps, props) => prevProps.id === props.id);
