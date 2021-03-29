
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://rest-api-finance.herokuapp.com',
})

export default api