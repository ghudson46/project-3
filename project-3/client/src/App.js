import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import NavBar from './components/NavBar/NavBar'
import Loading from './components/Loading/Loading'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Join from './pages/Join'
import Chat from './pages/Chat'


function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div><Loading /></div>

  return (
      <div id="app">
        <NavBar />
        <div className="container">
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/profile' component={Profile} />
            <Route path='/join' component={Join} />
            <Route path = '/chat' component={Chat} />
          </Switch>
        </div>
      </div>
  );
}

export default App;
