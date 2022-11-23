import createSagaMiddleware from "redux-saga";
import {configureStore} from "@reduxjs/toolkit";
import { reducer } from "./reducers";
import rootSaga from "./ReduxSaga";
import thunk from "redux-thunk";

const sagamiddleware = createSagaMiddleware();
const middleware = [thunk,sagamiddleware]
export const store = configureStore({
    reducer,
    middleware: middleware
  });
sagamiddleware.run(rootSaga)