import {createStore, compose, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import { rootReducer } from './Root-reducer';
import { persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import { rootsaga } from './root-saga';

const persisconfig={
    key:'root',
    storage,
    whitelist : ['cart'],
    // blacklist:['user'],
}

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persisconfig, rootReducer);

const middlewares = [process.env.NODE_ENV !=='production' && logger, 
// thunk,
sagaMiddleware
].filter(Boolean);

const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootsaga);

export const persistor = persistStore(store);