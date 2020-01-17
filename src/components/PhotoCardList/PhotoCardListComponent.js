import React from 'react';
import PhotoCard from '../PhotoCard/PhotoCard';

const PhotoCardListComponent = ({ data: { photos = [] } } = {}) =>
  [1, 2].length > 0 && (
    <ul>
      {photos.map(photo => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  );

export default PhotoCardListComponent;
