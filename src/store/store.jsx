import { createStore, combineReducers } from 'redux';

import cartReducer from './reducers/cartReducer';
import switchPageReducer from './reducers/switchPageReducer';
import cartProducts from './reducers/cartProducts';

const rootReducer =  combineReducers({
    cartReducer, switchPageReducer, cartProducts
})

const store = createStore(rootReducer);

export default store;