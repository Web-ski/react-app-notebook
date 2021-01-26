import React from 'react';
import PropTypes from 'prop-types';
import UserPageTemplate from 'templates/UserPageTemplate';

const DetailsTemplate = ({ children, pageType }) => (
  <UserPageTemplate pageType={pageType}>{children}</UserPageTemplate>
);

DetailsTemplate.propTypes = {
  children: PropTypes.element,
  pageType: PropTypes.string.isRequired,
};

DetailsTemplate.defaultProps = {
  children: null,
};

export default DetailsTemplate;

// import styled from 'styled-components';
