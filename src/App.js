import React from 'react';
import './App.css';
import { Home, About, Stories, Navigation, Login } from './components';
import { Submit } from './components/admin/Submit';
import { Route } from "react-router-dom";





const App = () => (
  <div>
    <Navigation />
    
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/stories" component={Stories} />
    <Route exact path="/admin/submit" component={Submit} />
    <Route exact path="/login" component={Login} />
  </div>



);

export default App;
