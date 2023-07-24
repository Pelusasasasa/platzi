/**
* @param {array} products CartProduct: Array of Objects
* @returns {Number} Total Price
*/


export function totalPrice(arreglo){
    let total = 0;

    arreglo.forEach(({price}) => total += price);

    return total
}