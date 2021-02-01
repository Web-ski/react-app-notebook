import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import withContext from 'hots/withContext';

const StyledWrapper = styled.div`
  z-index: 99;
  position: fixed;
  right: 0;
  top: 0;
  padding: 50px;
  height: 100vh;
  width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.white};
  box-shadow: -10px 0 10px rgba(0, 0, 0, 0.1);
  transform: translateX(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.2s;
`;

const StyledTexArea = styled(Input)`
  min-height: 250px;
  margin: 0 0 50px;
`;

const StyledInput = styled(Input)`
  margin: 0 0 20px;
`;

const RightBar = ({ pageContext, isVisible }) => (
  <StyledWrapper isVisible={isVisible}>
    <Heading big>Add new {pageContext}</Heading>
    <StyledInput placeholder={pageContext === 'twitters' ? 'twitter account name' : 'title'} />
    {pageContext === 'articles' && <StyledInput placeholder="link" />}
    <StyledTexArea as="textarea"
placeholder="text" />
    <Button activeColor={pageContext}>Add Note</Button>
  </StyledWrapper>
);

RightBar.propTypes = {
  pageContext: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default withContext(RightBar);
