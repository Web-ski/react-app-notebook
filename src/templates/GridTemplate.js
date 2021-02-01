/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import UserPageTemplate from 'templates/UserPageTemplate';
import withContext from 'hots/withContext';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import plusIcon from 'assets/plus.svg';
import RightBar from 'components/organisms/RightBar/RightBar';

const StyledWrapper = styled.div`
  padding: 40px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 80px;

  @media (max-width: 1400px) {
    grid-gap: 40px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
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

const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: ${({ activeColor, theme }) => theme[activeColor]};
  border-radius: 50px;
  z-index: 100;
`;

// eslint-disable-next-line react/prop-types
const GridTemplate = ({ children, pageContext }) => {
  const [visibileRightBar, setVisibileRightBar] = useState(false);

  const handleVisbility = () => {
    setVisibileRightBar(!visibileRightBar);
  };

  return (
    <UserPageTemplate>
      <StyledWrapper>
        <StyledPageHeader>
          <Input search
placeholder="Search" />
          <StyledHeading big>{pageContext}</StyledHeading>
          <StyledParagraph>6 {pageContext}s</StyledParagraph>
        </StyledPageHeader>
        <StyledGrid>{children}</StyledGrid>
        <StyledButtonIcon onClick={handleVisbility}
icon={plusIcon}
activeColor={pageContext} />
        <RightBar isVisible={visibileRightBar} />
      </StyledWrapper>
    </UserPageTemplate>
  );
};

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withContext(GridTemplate);
