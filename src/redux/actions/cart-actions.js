const ADD_TO_CART = 'ADD_TO_CART';

//定义一个action，作为store.dispatch（）的一个参数。action是一个JavaScript对象，有一个必须的type和可选的payload。
export function addToCart(product, quantity, unitCost){
    return {
        type: ADD_TO_CART,
        payload: { product, quantity, unitCost }
    }
}

export function updateCart(product, quantity, unitCost){
    return {
        type: 'UPDATE_CART',
        payload: {
            product,
            quantity,
            unitCost
        }
    }
}

export function deleteFromCart(product){
    return {
        type: 'DELETE_FROM_CART',
        payload: {
            product
        }
    }
}