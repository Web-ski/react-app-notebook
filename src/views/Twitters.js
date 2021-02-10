import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Twitters = ({ twitters }) => (
  <GridTemplate>
    {twitters.map(({ title, content, created, twitterName, id }) => (
      <Card
        cardId={id}
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
  const { twitters } = state;
  console.log(twitters);
  return { twitters };
};

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
      twitterName: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
};

Twitters.defaultProps = {
  twitters: [],
};

export default connect(mapStateToProps)(Twitters);
