import React from 'react';

import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>
    <h1 style={{textAlign: 'center'}}>Unnamed VideoSync Application</h1>
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Chat} />
  </Router>
  </>
  );
}

export default App;
