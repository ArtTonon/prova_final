import axios from "axios";

const jogadorService = axios.create({
    baseURL: 'http://localhost:38000',
});

export default jogadorService