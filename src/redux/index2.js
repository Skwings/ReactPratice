import {createStore} from 'redux'
import { combineReducers } from 'redux' 

//模拟测试数据
const initialState = {
    cart: [
      {
        product: 'bread 700g',
        quantity: 2,
        unitCost: 90
      },
      {
        product: 'milk 500ml',
        quantity: 1,
        unitCost: 47
      }
    ]
}

const ADD_TO_CART = 'ADD_TO_CART';

/* 
param @state 保存在state中的数据
param @action 是一个容器，type--用于ADD、UPDATE、DELETE等。payload--用于更新状态的数据。  

*/
const productsReducer = function(state = [], action){ 
    return state
}
const cartReducer = function(state = initialState, action){
    switch (action.type) {
        case ADD_TO_CART: {
            console.log("...state.cart,", [...state.cart])
            console.log("action.payload", action.payload)
            return {
                cart: [...state.cart, action.payload]
            }
        }

        default: 
            return state
    }
}

const allReducers = {
    productsReducer: productsReducer,
    cartReducer: cartReducer
}

//定义一个action，作为store.dispatch（）的一个参数。action是一个JavaScript对象，有一个必须的type和可选的payload。
function addToCart(product, quantity, unitCost){
    return {
        type: ADD_TO_CART,
        payload: { product, quantity, unitCost }
    }
}

const store = createStore(combineReducers(allReducers)); //创建redux存储区，只能用reducer作为参数来构造。

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);
unsubscribe();
store.dispatch(addToCart('Coffee 500gm', 1, 250));
store.dispatch(addToCart('Flour 1kg', 2, 110));
store.dispatch(addToCart('Juice 2L', 1, 250));
console.log("initialState: ", store.getState())