import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Chat from './Chat/Chat';
import Join from '../pages/Join';
import Profile from './Authentication/Profile';
import Login from '../pages/Login';
import Home from '../pages/Home';

const AppRouter = () => (
  <Switch>
    <Route path="/" component={Home} />
    <Route path='/join' component={Join} />
    <Route path='/chat' component={Chat} />
    <Route path='/profile' component={Profile} />
  </Switch>
);

export default AppRouter;