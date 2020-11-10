import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Chat from './Chat/Chat';
import Join from '../pages/Join';
import Profile from './Validation/Profile';
import Home from '../pages/Home';

const AppRouter = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/join' component={Join} />
    <Route exact path='/chat' component={Chat} />
    <Route exact path='/profile' component={Profile} />
  </Switch>
);

export default AppRouter;