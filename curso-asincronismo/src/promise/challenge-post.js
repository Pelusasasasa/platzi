const axios = require('axios');
const API = "https://api.escuelajs.co/api/v1";

function postData(urlApi,data) {
    const response = axios.post(urlApi,data,{
        header:{
            'Content-type':'application/json'
        }
    });
    return response
};


const data = {
    "title": "New Product Agustin",
    "price": 9948,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
};

postData(`${API}/products`,data)
    .then(response => response.data)
    .then(product => console.log(product));