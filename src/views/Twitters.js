import React from 'react';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';

const Twitters = () => (
  <>
    <Heading big>Twitters</Heading>
    <Button width="200px">Close / Save</Button>
    <Button secondary>Remove</Button>
    <Button tertiary>Add</Button>
  </>
);
export default Twitters;
