import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import { fetchShopDataStart } from "./shop/shopData.saga";

import rootReducer from "./root-reducer";

const sagaMiddleware = createSagaMiddleware();

const myMiddleware = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
    myMiddleware.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...myMiddleware));

sagaMiddleware.run(fetchShopDataStart);

export default store;
