/* eslint-disable react/prop-types */
import React from 'react';
import DetailTemplate from 'templates/DetailsTemplate';

const DetailsPage = () => {
  const mockyArticle = {
    id: 1,
    title: 'Super title about React',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt labore molestias, quis excepturi eveniet debitis iure eligendi enim fuga officia quasi culpa sit fugit at recusandae quisquam nemo tenetur minima.',
    twitterName: 'PaweNO1',
    articleUrl: 'https://nieczuja-portfolio.pl',
    created: '1 day',
  };

  return (
    <DetailTemplate
      title={mockyArticle.title}
      cardId={mockyArticle.id}
      content={mockyArticle.content}
      articleUrl={mockyArticle.articleUrl}
      twitterName={mockyArticle.twitterName}
      created={mockyArticle.created}
      key={mockyArticle.title}
    />
  );
};

export default DetailsPage;
