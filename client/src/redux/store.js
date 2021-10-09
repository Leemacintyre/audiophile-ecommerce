import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./root-reducer";
import { rootSaga } from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

const myMiddleware = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
    myMiddleware.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...myMiddleware));

sagaMiddleware.run(rootSaga);

export const persister = persistStore(store);

export default store;
