import React from 'react';
import StyledCategory from './Category.style';

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg';

const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => (
  <StyledCategory to={path}>
    <img src={cover} alt={cover} className="category-img" />
    {emoji}
  </StyledCategory>
);

export default Category;
