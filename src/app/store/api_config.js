import axios from "axios";

const defaultOptions = {
    baseURL: "https://salt-mne-be-s8vht.ondigitalocean.app/api",
    headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json, text/plain, */*', 
    },
};

let instance = axios.create(defaultOptions);


export default instance;