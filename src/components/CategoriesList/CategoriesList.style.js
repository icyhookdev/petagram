import styled, { css } from 'styled-components';
import { slideDown } from '../../styles/animation';

const StyledCategoriesList = styled.ul`
  display: flex;
  overflow-y: auto;
  width: 100%;
  margin-bottom: 2rem;
  ${props => props.fixed && slideDown()};
  ${props =>
    props.fixed &&
    css`
      background: #fff;
      border-radius: 60px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
      left: 0;
      margin: 0 auto;
      max-width: 400px;
      padding: 5px;
      position: fixed;
      right: 0;
      top: -20px;
      transform: scale(0.5);
      z-index: 1;
    `};
  .category-item {
    padding: 0 0.8rem;
  }
`;

export default StyledCategoriesList;
