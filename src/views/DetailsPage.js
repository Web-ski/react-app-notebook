/* eslint-disable react/prop-types */
import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { routes } from 'routes';
import DetailTemplate from 'templates/DetailsTemplate';

const DetailsPage = () => {
  const match = useRouteMatch();

  return (
    <DetailTemplate>
      <p>{`is note: ${match.path === routes.note}`}</p>
      <p>{`is twitter: ${match.path === routes.twitter}`}</p>
      <p>{`is article: ${match.path === routes.article}`}</p>
    </DetailTemplate>
  );
};

export default DetailsPage;
