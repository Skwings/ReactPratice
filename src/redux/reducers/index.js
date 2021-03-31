import { combineReducers } from 'redux' 
import productsReducer from './products-reducer.js'
import cartReducer from './cart-reducers.js'


const allReducers = {
    products: productsReducer,
    shoppingCart: cartReducer
}

export default combineReducers(allReducers)