import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import UserPageTemplate from 'templates/UserPageTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import LINK_ICON from 'assets/link.svg';

const StyledWrapper = styled.div`
  padding: 40px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledWrapperNote = styled.div`
  position: relative;
  padding: 40px;
  box-shadow: 0 0px 30px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const DateInfo = styled(Paragraph)`
  margin: 0 0 5px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;

const StyledImage = styled.img`
  width: 85px;
  height: 85px;
  border: 5px solid ${({ theme }) => theme.grey2};
  position: absolute;
  border-radius: 50%;
  right: 25px;
  top: 20px;
`;

const StyledLink = styled.a`
  display: block;
  width: 47px;
  height: 47px;
  background: white url(${LINK_ICON});
  background-size: 50%;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  border-radius: 50%;
  right: 25px;
  top: 20px;
`;

const DetailsTemplate = ({
  pageType,
  title,
  created,
  twitterName,
  articleUrl,
  content,
  cardId,
}) => (
  <UserPageTemplate pageType={pageType}>
    <StyledWrapper>
      <StyledWrapperNote>
        <StyledHeading big>{title}</StyledHeading>
        <DateInfo>{created}</DateInfo>
        <Paragraph>No {cardId}</Paragraph>
        <Paragraph>{content}</Paragraph>
        {pageType === 'twitters' && (
          <StyledImage
            src={`https://res.cloudinary.com/dthynrfew/image/twitter_name/${twitterName}.jpg`}
          />
        )}
        {pageType === 'articles' && <StyledLink href={articleUrl} />}

        <Button as={Link}
to={`/${pageType}`}
activeColor={pageType}>
          Save/Close
        </Button>
      </StyledWrapperNote>
    </StyledWrapper>
  </UserPageTemplate>
);

DetailsTemplate.propTypes = {
  pageType: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
  cardId: PropTypes.string.isRequired,
};

DetailsTemplate.defaultProps = {
  twitterName: null,
  articleUrl: null,
};

export default DetailsTemplate;

// import styled from 'styled-components';
