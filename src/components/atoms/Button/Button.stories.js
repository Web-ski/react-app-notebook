import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => <Button>Hello</Button>;
export const Secondary = () => <Button secondary>Second</Button>;
export const Tertiary = () => <Button tertiary>Add</Button>;
