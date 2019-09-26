import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

//components
import Dashboard from './components/admin/Dashboard';
import Home from './components/Home';
import LoginForm from './components/Login';
import PrivateRoute from './components/admin/PrivateRoute'
import Submit  from './components/admin/Submit';


import Footer from './components/Footer'
import StoryForm from './components/StoryForm'
import { About, Stories, Navigation, Login } from './components';
import Footer from "./components/Footer";



//context
import StoryContext from '../src/contexts/StoryContext';


const App = () => (
  <div>
    <Navigation />
    
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/stories" component={Stories} />
    <PrivateRoute exact path="/dashboard" component={Dashboard} />
    {/* <Route exact path="/admin/submit" component={Submit} /> */}
    <Route path="/submit" component={StoryForm}/>
    <Route exact path="/login" component={Login} />
    <Footer />
  </div>



);

export default App;

