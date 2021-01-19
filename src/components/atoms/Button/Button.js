import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: white;
  padding: 15px 25px;
  letter-spacing: 2px;
  font-size: 14px;
  width: ${({ width }) => width || 'max-content'};
  height: 50px;
  font-weight: ${({ theme }) => theme.regular};
  border: none;
  outline: none;
  //border-radius: 25px;
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.secondary};
      color: white;
    `}

  ${({ tertiary }) =>
    tertiary &&
    css`
      background-color: ${({ theme }) => theme.tertiary};
      color: white;
    `}
`;

export default Button;
