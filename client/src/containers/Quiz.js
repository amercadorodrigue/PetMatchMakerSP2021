import React from 'react';
import Question from '../components/Questions/Question';
import AppBar from '../components/AppBar/AppBar';
import AppBarComponent from '../components/AppBar/AppBar';
import { Grow } from '@material-ui/core';
const Quiz = () => {
   return (
      <Grow in>
         <div>
            <AppBarComponent />
            <Question />
         </div>
      </Grow>
   )
};
export default Quiz;