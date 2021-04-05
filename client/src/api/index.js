import axios from 'axios';

const url = 'http://localhost:5000/quiz';
export const fetchBirds = () => axios.get(`${url}/Birds`);
export const fetchFish = () => axios.get(`${url}/Fish`);
export const fetchMammals = (value) => axios.get(`${url}/Mammals`, { params: value });
export const fetchReptiles = () => axios.get(`${url}/Reptiles`);
// export const fetchUserss = () => axios.get(`${url}/Users`);