import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Heading from './Heading';

export default {
  title: 'Heading',
  component: Heading,
  decorators: [withKnobs],
};

export const Title = () => <Heading>{text('Label', 'Hello Storybook')}</Heading>;

export const TitleBig = () => <Heading big>{text('Label', 'Hello Storybook')}</Heading>;
