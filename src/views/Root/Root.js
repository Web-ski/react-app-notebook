import React from 'react';
import Button from 'components/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';

const Root = () => (
  <div>
    <GlobalStyle />
    <h1>Hello, man</h1>
    <Button width="200px">Close / Save</Button>
    <Button secondary>Remove</Button>
  </div>
);
export default Root;
