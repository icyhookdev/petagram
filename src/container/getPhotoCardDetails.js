import React from 'react';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import PhotoCard from '../components/PhotoCard/PhotoCard';

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      userId
      liked
      likes
    }
  }
`;

const renderPhoto = ({ loading, error, data }) => {
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return error;
  }
  const { photo = {} } = data;

  return <PhotoCard likes={photo.likes} src={photo.src} id={photo.id} />;
};

const GetPhotoCardDetails = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {renderPhoto}
  </Query>
);

export default GetPhotoCardDetails;
