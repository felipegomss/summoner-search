import axios from "axios";

const api = axios.create({
    baseURL: "https://summoner-search-api-v1.herokuapp.com/"
})

export default api;