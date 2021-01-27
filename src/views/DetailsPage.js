/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { routes } from 'routes';
import DetailTemplate from 'templates/DetailsTemplate';

const DetailsPage = () => {
  const [type, setType] = useState('notes');
  const match = useRouteMatch();

  useEffect(() => {
    switch (match.path) {
      case routes.note:
        setType('notes');
        break;
      case routes.twitter:
        setType('twitters');
        break;
      case routes.article:
        setType('articles');
        break;
      default:
        setType('notes');
        break;
    }
  }, [match]);

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
      pageType={type}
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
