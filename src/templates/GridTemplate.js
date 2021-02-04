/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import UserPageTemplate from 'templates/UserPageTemplate';
import withContext from 'hots/withContext';

const StyledWrapper = styled.div`
  padding: 40px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 70px;
`;

const StyledPageHeader = styled.div`
  margin: 20px 0 40px;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;
  text-transform: capitalize;
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
`;

// eslint-disable-next-line react/prop-types
const GridTemplate = ({ children, pageContext }) => (
  <UserPageTemplate>
    <StyledWrapper>
      <StyledPageHeader>
        <Input search
placeholder="Search" />
        <StyledHeading big>{pageContext}</StyledHeading>
        <StyledParagraph>6 {pageContext}s</StyledParagraph>
      </StyledPageHeader>
      <StyledGrid>{children}</StyledGrid>
    </StyledWrapper>
  </UserPageTemplate>
);

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withContext(GridTemplate);
