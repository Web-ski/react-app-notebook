import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import bulbIcon from 'assets/bulb.svg';
import logoutIcon from 'assets/logout.svg';
import penIcon from 'assets/pen.svg';
import twitterIcon from 'assets/twitter.svg';
import withContext from 'hots/withContext';

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
  background-color: ${({ activeColor, theme }) =>
    activeColor ? theme[activeColor] : theme.mainColor};
`;

const Brand = styled.div`
  position: relative;
  width: min-content;
  height: min-content;
  text-align: justify;
  font-weight: ${({ theme }) => theme.xbold};
  text-transform: uppercase;
  line-height: 120%;
  color: white;
  background-color: black;
  padding: 5px 10px;

  &:after {
    display: block;
    position: absolute;
    content: '';
    height: 10px;
    width: 10px;
    right: 8px;
    top: 8px;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.mainColor};
  }
`;

const Italic = styled.span`
  text-transform: lowercase;
  font-family: 'Clicker Script', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.regular};
`;

const Sidebar = ({ pageContext }) => {
  const pageTypes = ['notes', 'twitters', 'articles'];

  return (
    <Wrapper activeColor={pageContext}>
      <Brand>
        <h2>
          <Italic>net</Italic> Book
        </h2>
      </Brand>
      <div>
        <ButtonIcon
          as={NavLink}
          to="/notes"
          icon={penIcon}
          className={pageTypes[0] === pageContext && 'active'}
        />
        <ButtonIcon
          as={NavLink}
          to="/twitters"
          icon={twitterIcon}
          className={pageTypes[1] === pageContext && 'active'}
        />
        <ButtonIcon
          as={NavLink}
          to="/articles"
          icon={bulbIcon}
          className={pageTypes[2] === pageContext && 'active'}
        />
      </div>
      <ButtonIcon as={NavLink}
to="/login"
icon={logoutIcon}
activeClassName="active" />
    </Wrapper>
  );
};

Sidebar.propTypes = {
  pageContext: PropTypes.string,
};

Sidebar.defaultProps = {
  pageContext: 'notes',
};

export default withContext(Sidebar);

// import plusIcon from 'assets/plus.svg';
