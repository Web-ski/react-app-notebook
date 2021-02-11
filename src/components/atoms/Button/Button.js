import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${({ activecolor, theme }) => (activecolor ? theme[activecolor] : theme.notes)};
  border: none;
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
      background-color: ${({ theme }) => theme.grey2};
      color: black;
      padding: 8px 20px;
      height: 40px;
      letter-spacing: 2px;
      font-size: 14px;
    `}

  ${({ tertiary }) =>
    tertiary &&
    css`
      background-color: ${({ theme }) => theme.tertiary};
    `}
`;

export default Button;
