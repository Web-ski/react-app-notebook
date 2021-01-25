import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Notes from 'views/Notes';
import Twitters from 'views/Twitters';
import Articles from 'views/Articles';
import DetailsPage from 'views/DetailsPage';
import { routes } from 'routes';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact
path={routes.home}>
          <Redirect to="/notes" />
        </Route>
        <Route exact
path={routes.notes}>
          <Notes />
        </Route>
        <Route path={routes.note}>
          <DetailsPage />
        </Route>
        <Route exact
path={routes.twitters}>
          <Twitters />
        </Route>
        <Route path={routes.twitter}>
          <DetailsPage />
        </Route>
        <Route exact
path={routes.articles}>
          <Articles />
        </Route>
        <Route path={routes.article}>
          <DetailsPage />
        </Route>
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);
export default Root;
