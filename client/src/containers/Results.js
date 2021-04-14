import { Grow } from '@material-ui/core';
import React from 'react';
import AppBarComponent from '../components/AppBar/AppBar';
import QuizResult from '../components/QuizResults/QuizResult';


const Results = () => {
    return (
        <Grow in>
            <div>
                <AppBarComponent></AppBarComponent>
                <QuizResult></QuizResult>
            </div>
        </Grow>
    )
};
export default Results;