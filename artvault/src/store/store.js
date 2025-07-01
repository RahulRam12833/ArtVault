// import {compose,createStore,applyMiddleware} from 'redux';
import {persistStore,persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user']

}

const middleWares = [import.meta.env.MODE ==='development' && logger].filter(Boolean);


// const composeEnhancer=(import.meta.env.MODE === 'development' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const persistedReducer = persistReducer(persistConfig, rootReducer);



// const composeEnhancers=composeEnhancer(applyMiddleware(...middleWares));

export const store = configureStore({
    reducer: persistedReducer,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(middleWares),
})
// export const store = createStore(persistedReducer,undefined, composeEnhancers)
export const persistor = persistStore(store);