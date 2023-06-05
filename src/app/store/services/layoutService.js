import axios from 'axios';

const getCountries = () => {
    return axios.get('https://restcountries.com/v3.1/all');
  };


  const layoutService = {
    getCountries
  };
  export default layoutService;
  