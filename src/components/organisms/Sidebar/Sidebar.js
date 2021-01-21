import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import bulbIcon from 'assets/bulb.svg';
import logoutIcon from 'assets/logout.svg';
import penIcon from 'assets/pen.svg';
import twitterIcon from 'assets/twitter.svg';

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  left: 0;
  top: 0;
  height: 100vh;
  width: 150px;
  background-color: ${({ theme }) => theme.mainColor};
`;

const Brand = styled.div`
  width: min-content;
  text-align: justify;
  font-weight: ${({ theme }) => theme.xbold};
  text-transform: uppercase;
  line-height: 110%;
  color: white;
`;

const Sidebar = () => (
  <Wrapper>
    <Brand>
      <h2>Note Book</h2>
    </Brand>
    <div>
      <ButtonIcon exact
as={NavLink}
to="/"
icon={penIcon}
activeclass="active" />
      <ButtonIcon as={NavLink}
to="/twitters"
icon={twitterIcon}
activeclass="active" />
      <ButtonIcon as={NavLink}
to="/articles"
icon={bulbIcon}
activeclass="active" />
    </div>
    <ButtonIcon as={NavLink}
to="/login"
icon={logoutIcon}
activeclass="active" />
  </Wrapper>
);

export default Sidebar;

// import plusIcon from 'assets/plus.svg';
