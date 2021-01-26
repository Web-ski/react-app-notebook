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

  return (
    <DetailTemplate pageType={type}>
      <p>{type}</p>
    </DetailTemplate>
  );
};

export default DetailsPage;
