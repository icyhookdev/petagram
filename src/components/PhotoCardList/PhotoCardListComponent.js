import React from 'react';
import PhotoCard from '../PhotoCard/PhotoCard';

const PhotoCardListComponent = ({ data: { photos = [] } } = {}) =>
  [1, 2].length > 0 && (
    <ul>
      {photos.map(photo => (
        <PhotoCard
          key={photo.id}
          id={photo.id}
          likes={photo.likes}
          src={photo.src}
        />
      ))}
    </ul>
  );

export default PhotoCardListComponent;
