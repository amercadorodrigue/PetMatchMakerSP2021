import * as types from './actionTypes';
import questions from '../../data/questionsList';

const getQuestions = () =>({
    types: types.GET_QUESTIONS,
    payload: questions
});

export default getQuestions;
