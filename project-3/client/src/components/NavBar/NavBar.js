import React from 'react';

import MainNav from './MainNav';
import AuthNav from './AuthNav';
import { useAuth0 } from '@auth0/auth0-react'

function NavBar() {
  const { isAuthenticated } = useAuth0();
    return (
    <div className="nav-container mb-3">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <div className="navbar-brand logo" />
          {isAuthenticated && (
            <MainNav />
          )}
          {!isAuthenticated && (
            <AuthNav />
          )}
        </div>
      </nav>
    </div>
    )
}

export default NavBar