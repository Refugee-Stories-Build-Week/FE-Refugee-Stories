import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

//components
import Dashboard from './components/admin/Dashboard';
import Home from './components/Home';
import LoginForm from './components/Login';
import PrivateRoute from './components/admin/PrivateRoute'

//context
import StoryContext from '../src/contexts/StoryContext';

function App() {
  return (
    <div className="App">
      <Home />
      <LoginForm />
    </div>
  );
}

export default App;

