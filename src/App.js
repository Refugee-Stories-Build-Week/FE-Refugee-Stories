import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

//components
import Dashboard from './components/admin/Dashboard';
import Home from './components/Home';
import PrivateRoute from './components/admin/PrivateRoute'
import UserRoute from "./components/admin/userRoute"
import Submit  from './components/admin/Submit';
import StoriesGrid from './components/StoriesGrid'


import StoryForm from './components/StoryForm'
import { About, Stories, Navigation, Login} from './components';
import Register from "./components/register"
import StoryPage from './components/StoryPage';
import Footer from './components/Footer'





//context
import StoryContext from '../src/contexts/StoryContext';
import StoriesToReview from './components/admin/StoriesToReview';



const App = () => (
  <div>
    <Navigation />
    
    
    {/* <Route exact path="/about" component={About} /> */}
    <UserRoute exact path="/stories" component={StoriesGrid} />
    
    <UserRoute path="/submit" component={StoryForm}/>
    <Route exact path="/" component={Register} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <PrivateRoute exact path="/dashboard" component={Dashboard} />
    <UserRoute exact path="/dashboard/story/:id" component={StoryPage} />
    <UserRoute path="/story/:id" component={Submit} /> 
    <UserRoute path="/StoryPage" component={StoryPage} />
    <Footer />
  </div>



);

export default App;

