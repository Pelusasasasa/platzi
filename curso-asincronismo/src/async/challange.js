const axios = require('axios');
const API = "https://api.escuelajs.co/api/v1";

async function axiosData(urlApi) {
    const response = await axios.get(urlApi);
    const data = response.data;
    return data 
}

const anotherFunction = async (urlApi) => {
     try {
        const products = await axiosData(`${API}/products`);
        const product = await axiosData(`${API}/products/${products[0].id}`);
        const category = await axiosData(`${API}/categories/${product.category.id}`);

        console.log(product);
        console.log(category)
     } catch (error){
        console.log(error)
     }
};

anotherFunction(API);