import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Card from './Card';

export default {
  title: 'Card',
  component: Card,
  decorators: [withKnobs],
};

export const Normal = () => <Card />;
export const Secondary = () => <Card cardType="twitter" />;
export const Tertiary = () => <Card cardType="article" />;
