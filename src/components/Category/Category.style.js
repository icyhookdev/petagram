import styled from 'styled-components';
import { Link } from '@reach/router';

const StyledCategory = styled(Link)`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 75px;
  .category-img {
    border: 4px solid #ddd;
    box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;
    object-position: center;
    height: 75px;
    width: 75px;
  }
`;

export default StyledCategory;
