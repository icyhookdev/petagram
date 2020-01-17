import styled from 'styled-components';

export const Form = styled.form`
  padding: 1.6rem 2rem;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  &[disabled] {
    opacity: 30%;
  }
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
`;

export const Button = styled.button`
  background: #8d00ff;
  border-radius: 3px;
  color: #fff;
  height: 3.2rem;
  display: block;
  width: 100%;
  text-align: center;
  &[disabled] {
    opacity: 30%;
  }
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: bold;
  padding: 0.8rem 0;
`;

export const ErrorMsg = styled.span`
  font-size: 1.4rem;
  color: red;
`;
