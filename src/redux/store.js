import {createStore} from 'redux'
import rootReducer from './reducers'

let store = createStore(rootReducer); //创建redux存储区，只能用reducer作为参数来构造。

export default store