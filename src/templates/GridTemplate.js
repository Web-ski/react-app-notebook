import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import UserPageTemplate from 'templates/UserPageTemplate';

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

const GridTemplate = ({ children, pageType }) => (
  <UserPageTemplate pageType={pageType}>
    <Sidebar pageType={pageType} />
    <StyledWrapper>
      <StyledPageHeader>
        <Input search
placeholder="Search" />
        <StyledHeading big>{pageType}</StyledHeading>
        <StyledParagraph>6 {pageType}s</StyledParagraph>
      </StyledPageHeader>
      <StyledGrid>{children}</StyledGrid>
    </StyledWrapper>
  </UserPageTemplate>
);

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

GridTemplate.defaultProps = {
  pageType: 'notes',
};

export default GridTemplate;
