import React from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import PropTypes from 'prop-types';
import StyledFavButton from './FavButton.style';

const FavButton = ({ liked, likes, clicked }) => {
  const LikedIcon = liked ? MdFavorite : MdFavoriteBorder;

  return (
    <StyledFavButton type="button" onClick={clicked}>
      <LikedIcon size="32px" />
      {likes} likes!
    </StyledFavButton>
  );
};

FavButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  clicked: PropTypes.func.isRequired,
};

export default FavButton;
