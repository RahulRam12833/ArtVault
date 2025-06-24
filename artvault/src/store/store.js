import {compose,createStore,applyMiddleware} from 'redux';
import {persistStore,persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import logger from 'redux-logger';
import {thunk} from 'redux-thunk';

import { rootReducer } from './root-reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']

}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [import.meta.env.MODE ==='development' && logger,thunk].filter(Boolean);


const composeEnhancer=(import.meta.env.MODE === 'development' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const composeEnhancers=composeEnhancer(applyMiddleware(...middleWares));
export const store = createStore(persistedReducer,undefined, composeEnhancers)
export const persistor = persistStore(store);