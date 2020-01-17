import styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router';

export const Link = styled(LinkRouter)`
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.8);
  display: inline-block;
  margin: 1%;
  overflow: hidden;
  width: 31.33%;
  position: relative;
  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;

export const Grid = styled.div`
  padding-top: 3.2rem;
`;

export const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  position: absolute;
`;
