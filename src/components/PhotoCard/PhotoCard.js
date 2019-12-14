import React, { useEffect, useRef, useState } from 'react';
import { Link } from '@reach/router';
import StyledPhotoCard from './PhotoCard.style';
import useLocalStorage from '../../hooks/useLocalStorage';
import useNearScreen from '../../hooks/useNearScreen';
import FavButton from '../FavButton/FavButton';
import ToggleLikeMutation from '../../container/ToggleLikeMutation';

const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';

const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const { show, elementRef } = useNearScreen();
  const lsIdLike = `${id}-like`;
  const { saveToLocalStorage, storeValue } = useLocalStorage(lsIdLike, false);

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
                !storeValue &&
                  toggleLike({
                    variables: {
                      input: { id },
                    },
                  });

                saveToLocalStorage(!storeValue);
              };

              return (
                <FavButton
                  liked={storeValue}
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

export default PhotoCard;
