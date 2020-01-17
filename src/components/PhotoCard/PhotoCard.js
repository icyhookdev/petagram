import React from 'react';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';
import StyledPhotoCard from './PhotoCard.style';
import useNearScreen from '../../hooks/useNearScreen';
import FavButton from '../FavButton/FavButton';
import ToggleLikeMutation from '../../container/ToggleLikeMutation';

const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';

const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const { show, elementRef } = useNearScreen();
  return (
    <StyledPhotoCard ref={elementRef} key={id}>
      {show && (
        <>
          <Link className="photocard-link" to={`/detail/${id}`}>
            <div className="photocard-contianer">
              <img src={src} className="photocard-img" alt={src} />
            </div>
          </Link>
          <ToggleLikeMutation>
            {toggleLike => {
              const handleFavClick = () => {
                toggleLike({
                  variables: {
                    input: { id },
                  },
                });
              };

              return (
                <FavButton
                  liked={liked}
                  likes={likes}
                  clicked={handleFavClick}
                />
              );
            }}
          </ToggleLikeMutation>
        </>
      )}
    </StyledPhotoCard>
  );
};

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  likes(props, propName, componentName) {
    const propValue = props[propName];
    if (propValue === undefined) {
      return new Error('value must be defined');
    }

    if (propValue < 0) {
      return new Error('value must be greater than 0');
    }
  },
  src: PropTypes.string.isRequired,
};

export default PhotoCard;
