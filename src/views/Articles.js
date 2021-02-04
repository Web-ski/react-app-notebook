import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Articles = ({ articles }) => (
  <GridTemplate pageType="articles">
    {articles.map(({ title, content, articleUrl, created, id }) => (
      <Card
        cardId={id}
        cardType="articles"
        title={title}
        content={content}
        articleUrl={articleUrl}
        created={created}
        key={title}
      />
    ))}
  </GridTemplate>
);

const mapStateToProps = (state) => {
  const { articles } = state;
  return { articles };
};

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      articleUrl: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
};

Articles.defaultProps = {
  articles: [],
};

export default connect(mapStateToProps)(Articles);
