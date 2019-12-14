import { css, keyframes } from 'styled-components';

const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }

`;

const slideDownKeyframes = keyframes`
  0% {
    top: -100px;
  }
  100% {
    top: -20px;
  }
`;

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) => css`
  animation: ${time} ${fadeInKeyframes} ${type};
`;

export const slideDown = ({
  time = '.5s',
  type = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
} = {}) => css`
  animation: ${time} ${slideDownKeyframes} ${type};
`;
