import React from 'react';
import styled from 'styled-components';
import { withKnobs } from '@storybook/addon-knobs';
import bulbIcon from 'assets/bulb.svg';
import logoutIcon from 'assets/logout.svg';
import penIcon from 'assets/pen.svg';
import plusIcon from 'assets/plus.svg';
import twitterIcon from 'assets/twitter.svg';
import ButtonIcon from './ButtonIcon';

const MainBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background: ${({ theme }) => theme.mainColor};
`;

export default {
  title: 'ButtonIcon',
  component: ButtonIcon,
  decorators: [withKnobs, (Story) => <MainBackground>{Story()}</MainBackground>],
};

export const Bulb = () => <ButtonIcon icon={bulbIcon} />;
// export const Active = () => <ButtonIcon active
// icon={bulbIcon} />;
export const Logout = () => <ButtonIcon icon={logoutIcon} />;
export const Pen = () => <ButtonIcon icon={penIcon} />;
export const Plus = () => <ButtonIcon icon={plusIcon} />;
export const Twitter = () => <ButtonIcon icon={twitterIcon} />;
