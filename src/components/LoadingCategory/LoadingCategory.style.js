import styled from 'styled-components';

const StyledLoadingCategory = styled.div`
  border: 4px solid #ddd;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  background: #fff;
  overflow: hidden;
  object-fit: cover;
  object-position: center;
  height: 75px;
  width: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  .lds-dual-ring {
    display: block;
    width: 45px;
    height: 45px;
  }
  .lds-dual-ring:after {
    content: '';
    display: block;
    width: 45px;
    height: 45px;
    /* margin: 8px; */
    border-radius: 50%;
    border: 3px solid #ddd;
    border-color: #ddd transparent #ddd transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default StyledLoadingCategory;
