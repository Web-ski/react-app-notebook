// Button.story.js

import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Button from './Button';

export default {
  title: 'Path/To/Button',
  component: Button,
  decorators: [withKnobs],
};

export const Primary = () => (
  <Button disabled={boolean('Disabled', false)}>{text('Label', 'Hello')}</Button>
);
export const Secondary = () => <Button secondary>Hello</Button>;
