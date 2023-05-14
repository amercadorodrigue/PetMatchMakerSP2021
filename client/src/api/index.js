import axios from 'axios';

//Local host to test and make things work
//const url = 'http://localhost:5000/app';

//Actual deployed Server
const url = 'https://pet-matchmakers.herokuapp.com/';


export const fetchBirds = () => axios.get(`${url}/Birds`);
export const fetchFish = () => axios.get(`${url}/Fish`);
export const fetchMammals = () => axios.get(`${url}/Mammals`);
export const fetchReptiles = () => axios.get(`${url}/Reptiles`);
export const fetchAnimals = (values) => axios.get(`${url}/Animals`, { params: values});