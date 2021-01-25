import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UserPageTemplate from 'templates/UserPageTemplate';

const DetailsTemplate = ({ children }) => (
  <UserPageTemplate>
    {children} <Link to="/">go back</Link>
  </UserPageTemplate>
);

DetailsTemplate.propTypes = {
  children: PropTypes.element,
};

DetailsTemplate.defaultProps = {
  children: null,
};

export default DetailsTemplate;

// import styled from 'styled-components';
