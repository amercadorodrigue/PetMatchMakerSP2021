export default (quizzes=[], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return quizzes;
        default:
            return quizzes;
    }
}