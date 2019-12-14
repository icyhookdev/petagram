import React from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
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

export default FavButton;
