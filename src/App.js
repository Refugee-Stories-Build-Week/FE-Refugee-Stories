import React from 'react';

import './App.css';
import StoriesToReview from './components/admin/StoriesToReview';
import StoryContext from '../src/contexts/StoryContext';

import Home from './components/Home';
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      {/* <StoriesToReview /> */}
      <Home /> 
      <Login />
    </div>
  );
}

export default App;

