import React from 'react';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';

const Articles = () => (
  <>
    <Heading big>Articles</Heading>
    <Button width="200px">Close / Save</Button>
    <Button secondary>Remove</Button>
    <Button tertiary>Add</Button>
  </>
);
export default Articles;
