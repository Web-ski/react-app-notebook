import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Notes from 'views/Notes';
import Twitters from 'views/Twitters';
import Articles from 'views/Articles';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact
path="/">
          <Redirect to="/notes" />
        </Route>
        <Route path="/notes">
          <Notes />
        </Route>
        <Route path="/twitters">
          <Twitters />
        </Route>
        <Route path="/articles">
          <Articles />
        </Route>
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);
export default Root;
