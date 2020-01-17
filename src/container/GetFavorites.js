import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import FavList from '../components/FavList/FavList';

const GET_FAVS = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`;

const renderFavs = ({ loading, error, data }) => {
  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>Error</p>;
  }

  const { favs } = data;

  return <FavList favs={favs} />;
};

export const FavsWithQuery = () => (
  <Query query={GET_FAVS} fetchPolicy="cache-and-network">
    {renderFavs}
  </Query>
);
