import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.mainColor};
  border: none;
  border-left-style: solid;
  border-left-width: 10px;
  border-left-color: ${({ theme }) => theme.primary};
  color: white;
  padding: 15px 25px;
  letter-spacing: 2px;
  font-size: 14px;
  width: ${({ width }) => width || 'max-content'};
  height: 50px;
  font-weight: ${({ theme }) => theme.regular};
  outline: none;
  border-radius: 5px;
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      border-color: ${({ theme }) => theme.secondary};
      color: white;
    `}

  ${({ tertiary }) =>
    tertiary &&
    css`
      border-color: ${({ theme }) => theme.tertiary};
      color: white;
    `}
`;

export default Button;
