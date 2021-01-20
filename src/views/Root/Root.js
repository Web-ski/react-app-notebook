import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';

const Root = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <Heading big>Hi, man!</Heading>
        <Button width="200px">Close / Save</Button>
        <Button secondary>Remove</Button>
        <Button tertiary>Add</Button>
      </>
    </ThemeProvider>
  </div>
);
export default Root;
