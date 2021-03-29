import { FETCH_ALL } from '../actions/constants/actionTypes';

export default ( animals = [], action ) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        default:
            return animals;
    }
}