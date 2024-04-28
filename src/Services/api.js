import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/'
    // baseURL: 'https://tem-w1vm.onrender.com',
});

export default api;