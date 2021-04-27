import React, { useEffect } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from '../components/Home/Home';
import NotFound from '../components/NotFound/NotFound';
import Results from './Results';
import Quiz from './Quiz';
import { useDispatch } from 'react-redux';



const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
  }, [dispatch]);

  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/quiz' component={Quiz} />
      <Route path='/results' component={Results} />
      <Route path='*' component={NotFound}/>
    </Switch>
  );
};

export default withRouter(App);
