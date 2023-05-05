const axios = require('axios');
const API = "https://api.escuelajs.co/api/v1";

function fetchData(urlApi) {
    return axios.get(urlApi);
};


fetchData(`${API}/products`)
    .then(response => response.data)
    .then(products => {
        console.log(products)
    });