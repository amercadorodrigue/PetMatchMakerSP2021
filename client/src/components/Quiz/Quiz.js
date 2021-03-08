import React, { useState, useEffect } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Question from '../components/Question';
import { questionCheck, saveResult } from '../redux/actions/quizActions';
import getQuestions from '../redux/actions/questionsActions';

const Quiz = () =>{
    <h1>This is the quiz page for now :D</h1>
}

export default Quiz;