import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: #304ffe;
  color: white;
  padding: 15px 25px;
  letter-spacing: 2px;
  font-size: 14px;
  width: ${({ width }) => width || 'max-content'};
  height: 50px;
  font-weight: 600;
  border: none;
  outline: none;
  //border-radius: 25px;
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: #c5cae9;
      color: black;
    `}
`;

export default Button;
