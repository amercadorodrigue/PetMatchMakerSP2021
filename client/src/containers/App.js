import React, { useEffect } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from '../components/Home/Home';
import Results from './Results';
import Quiz from './Quiz';
import { useDispatch } from 'react-redux';

import { getBirds, getFish, getMammals, getReptiles } from '../redux/actions/animals';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReptiles());
  }, [dispatch]);

  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/quiz' component={Quiz} />
      <Route path='/results' component={Results} />
    </Switch>
  );
};

export default withRouter(App);
