import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Twitters = ({ twitters }) => (
  <GridTemplate pageType="twitters">
    {twitters.map(({ title, content, created, twitterName, id }) => (
      <Card
        cardId={id}
        cardType="twitters"
        title={title}
        content={content}
        created={created}
        twitterName={twitterName}
        key={title}
      />
    ))}
  </GridTemplate>
);

const mapStateToProps = (state) => {
  const { twitters } = state.payload;
  return { twitters };
};

Twitters.propTypes = {
  twitters: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Twitters);
