/**
 * Calcula el total de una nueva orden
 * @param {Array} products cartProducts: Array ob objects
 * @returns {int} Total price
 */
export const totalPrice = (products) => {
    let sum = 0;
    products.forEach(product => sum += product.price);
    return sum;
}