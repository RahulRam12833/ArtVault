import {compose,createStore,applyMiddleware} from 'redux';
import {persistStore,persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import logger from 'redux-logger';
//import {thunk} from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root-saga';
import { rootReducer } from './root-reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']

}

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [import.meta.env.MODE ==='development' && logger,sagaMiddleware].filter(Boolean);


const composeEnhancer=(import.meta.env.MODE === 'development' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const composeEnhancers=composeEnhancer(applyMiddleware(...middleWares));


export const store = createStore(persistedReducer,undefined, composeEnhancers)

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);