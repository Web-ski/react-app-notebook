import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.white};
  border: none;
  border-style: dashed;
  border-width: 5px;
  border-color: ${({ theme }) => theme.primary};
  color: black;
  padding: 15px 25px;
  letter-spacing: 2px;
  font-size: 14px;
  width: ${({ width }) => width || 'max-content'};
  height: 60px;
  font-weight: ${({ theme }) => theme.regular};
  outline: none;
  //border-radius: 5px;
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      border-color: ${({ theme }) => theme.secondary};
    `}

  ${({ tertiary }) =>
    tertiary &&
    css`
      border-color: ${({ theme }) => theme.tertiary};
    `}
`;

export default Button;
