import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-backend-dabela.herokuapp.com',
});

export default api;