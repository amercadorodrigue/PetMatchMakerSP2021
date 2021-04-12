import axios from 'axios';

const url = 'https://pet-matchmaker.herokuapp.com';
export const fetchBirds = () => axios.get(`${url}/Birds`);
export const fetchFish = () => axios.get(`${url}/Fish`);
export const fetchMammals = () => axios.get(`${url}/Mammals`);
export const fetchReptiles = () => axios.get(`${url}/Reptiles`);
export const fetchAnimals = (values) => axios.get(`${url}/Animals`, { params: values});
// export const fetchUserss = () => axios.get(`${url}/Users`);