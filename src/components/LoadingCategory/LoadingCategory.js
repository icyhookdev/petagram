import React from 'react';
import StyledLoadingCategory from './LoadingCategory.style';

const LoadingCategory = () => (
  <StyledLoadingCategory>
    <div className="lds-dual-ring" />
  </StyledLoadingCategory>
);

export default LoadingCategory;
