import * as api from '../../api';
import { FETCH_ALL } from '../actions/constants/actionTypes';

export const getBirds = () => async (dispatch) => {

    try {
        const { data } = await api.fetchBirds();
        dispatch({type: FETCH_ALL, payload: data });
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

export const getFish = () => async (dispatch) => {

    try {
        const { data } = await api.fetchFish();
        dispatch({type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const getMammals = (value) => async (dispatch) => {

    try {
        const { data } = await api.fetchMammals( value );
        dispatch({type: FETCH_ALL, payload: data });
        console.log();
    } catch (error) {
        console.log(error);
    }
}

export const getReptiles = () => async (dispatch) => {

    try {
        const { data } = await api.fetchReptiles();
        dispatch({type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error);
    }
}
export const getAnimals = (values) => async (dispatch) => {

    try {
        const { data } = await api.fetchAnimals(values);
        dispatch({type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error);
    }
}