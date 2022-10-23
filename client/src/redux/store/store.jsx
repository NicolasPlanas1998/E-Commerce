import { createStore, applyMiddleware, compose } from "redux";
import {rootReducer} from "../reducer/index";
import rootSaga from "../actions/sagas"
import createSagaMiddleware from "redux-saga"


const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
    );

sagaMiddleware.run(rootSaga)
export default store;