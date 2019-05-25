import axios from 'axios';

let instance = axios.create({
    baseURL: 'https://newsapi.org/v2/top-headlines'
});

export default instance;