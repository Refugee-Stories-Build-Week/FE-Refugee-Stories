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
import { About, Stories, Navigation, Login, } from './components';
import Story from "./Story"





//context
import StoryContext from '../src/contexts/StoryContext';
import StoriesToReview from './components/admin/StoriesToReview';
import StoryPage from './components/StoryPage';


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
    <Route path="/story" component={Story} />
    <Route path="/StoryPage" component={StoryPage} />
    <Story />
    <Footer />
  </div>



);

export default App;

