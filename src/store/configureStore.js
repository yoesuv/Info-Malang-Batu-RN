import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import dataReducer from './reducers/myData';
import uiReducer from './reducers/ui';
import uiReducerGallery from './reducers/uiGallery';

const rootReducer = combineReducers({
    dataConfigure: dataReducer,
    uiConfigure: uiReducer,
    uiConfigureGallery: uiReducerGallery
});

let composeEnhanchers = compose;
if (__DEV__) {
    composeEnhanchers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
    return createStore(rootReducer, composeEnhanchers(applyMiddleware(thunk)));
};

export default configureStore;
