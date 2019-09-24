import React from 'react';
import './App.css';

//components
import Dashboard from './components/admin/Dashboard';
import Home from './components/Home';
import Login from './components/Login';

//context
import StoryContext from '../src/contexts/StoryContext';

function App() {
  return (
    <div className="App">
      
      <Home /> 
      <Login />
    </div>
  );
}

export default App;

