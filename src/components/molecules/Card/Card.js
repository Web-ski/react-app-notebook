import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import LINK_ICON from 'assets/link.svg';
import removeItemAction from 'api/actions';

const StyledWrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: 17px 30px;
  background-color: ${({ theme }) => theme.grey1};
  border-top: solid 10px ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};
  :first-of-type {
    z-index: 2;
  }

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border: none;
      background-color: ${({ theme }) => theme.white};
    `}
`;

const DateInfo = styled(Paragraph)`
  margin: 0 0 5px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;

const StyledAvatar = styled.img`
  width: 85px;
  height: 85px;
  border: 5px solid ${({ theme }) => theme.grey2};
  position: absolute;
  border-radius: 50%;
  right: 25px;
  top: 20px;
`;

const StyledLinkButton = styled.a`
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

const Card = ({
  // eslint-disable-next-line react/prop-types
  removeAction,
  cardId,
  cardType,
  title,
  created,
  twitterName,
  articleUrl,
  content,
}) => {
  const [redirect, setRedirect] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const handleCardClick = () => {
    setRedirect(true);
  };

  console.log(typeof removeAction);

  if (redirect) {
    return <Redirect to={`${cardType}/${cardId}`} />;
  }
  return (
    <StyledWrapper>
      <InnerWrapper activeColor={cardType}>
        <StyledHeading>{title}</StyledHeading>
        <DateInfo>{created}</DateInfo>
        {cardType === 'twitters' && (
          <StyledAvatar
            src={`https://res.cloudinary.com/dthynrfew/image/twitter_name/${twitterName}`}
          />
        )}
        {cardType === 'articles' && <StyledLinkButton href={articleUrl} />}
      </InnerWrapper>
      <InnerWrapper flex>
        <Paragraph>{content}</Paragraph>
        <Button secondary
onClick={() => removeAction(cardType, cardId)}>
          REMOVE
        </Button>
      </InnerWrapper>
    </StyledWrapper>
  );
};

Card.propTypes = {
  cardType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
  cardId: PropTypes.string.isRequired,
  removeAction: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.number,
    PropTypes.objectOf(PropTypes.string),
  ]).isRequired,
};

Card.defaultProps = {
  cardType: 'notes',
  twitterName: null,
  articleUrl: null,
};

const mapDispatchToProps = (dispatch) => ({
  removeAction: (itemType, id) => dispatch(removeItemAction(itemType, id)),
});

export default connect(null, mapDispatchToProps)(Card);
