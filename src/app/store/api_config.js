import axios from "axios";

const defaultOptions = {
    baseURL: "http://localhost:1337/api",
    headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json, text/plain, */*', 
    },
};

let instance = axios.create(defaultOptions);


export default instance;