import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Notes from 'views/Notes';
import Twitters from 'views/Twitters';
import Articles from 'views/Articles';

const Root = () => (
  <MainTemplate>
    <BrowserRouter>
      <Switch>
        <Route exact
path="/">
          <Notes />
        </Route>
        <Route path="/twitters">
          <Twitters />
        </Route>
        <Route path="/articles">
          <Articles />
        </Route>
      </Switch>
    </BrowserRouter>
  </MainTemplate>
);
export default Root;
