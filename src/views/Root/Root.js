import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';
import theme from 'theme/mainTheme';

const Root = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <h1>Hi, man!</h1>
        <Button width="200px">Close / Save</Button>
        <Button secondary>Remove</Button>
        <Button tertiary>Add</Button>
      </>
    </ThemeProvider>
  </div>
);
export default Root;
