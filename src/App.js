import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './Components/pages/Home';
import Contact from './Components/pages/Contact';
import About from './Components/pages/About';
import Navbar from './Components/layout/NavBar';
import NotFound from './Components/pages/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Adduser from './Components/Users/Adduser';
import EditUser from './Components/Users/EditUser';

import './App.css';
import User from './Components/Users/User';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className='con'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/add/user' component={Adduser} />
          <Route exact path='/user/:id' component={User} />
          <Route exact path='/edit/user/:id' component={EditUser} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
