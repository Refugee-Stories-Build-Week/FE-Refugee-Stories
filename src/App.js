import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

//components
import Dashboard from './components/admin/Dashboard';
import Home from './components/Home';
import PrivateRoute from './components/admin/PrivateRoute'
import Submit  from './components/admin/Submit';
import StoriesGrid from './components/StoriesGrid'


import StoryForm from './components/StoryForm'
import { About, Stories, Navigation, Login } from './components';

import StoryPage from './components/StoryPage';
import Footer from './components/Footer'





//context
import StoryContext from '../src/contexts/StoryContext';
import StoriesToReview from './components/admin/StoriesToReview';



const App = () => (
  <div>
    <Navigation />
    
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/stories" component={StoriesGrid} />
    
    <Route path="/submit" component={StoryForm}/>
    <Route exact path="/login" component={Login} />

    <PrivateRoute exact path="/dashboard" component={Dashboard} />
    <Route path="/dashboard/stories/:id" component={StoryPage} />
    <Route exact path="/story/:id" component={Submit} /> 

    <Footer />
  </div>



);

export default App;

