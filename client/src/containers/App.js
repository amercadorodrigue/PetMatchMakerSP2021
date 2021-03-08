import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from '../components/Home/Home';
import Results from './Results';
import Quiz from './Quiz';


const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/quiz' component={Quiz} />
      <Route path='/results' component={Results} />
    </Switch>
  );
};

export default withRouter(App);
