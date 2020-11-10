import React from 'react';
import AppRouter from './components/Router'
import { useAuth0 } from '@auth0/auth0-react';

import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
    <>
      <h1 style={{textAlign: 'center'}}>Unnamed VideoSync Application</h1>
      <Router>
        <AppRouter />
      </Router>
    </>
  );
}

export default App;
