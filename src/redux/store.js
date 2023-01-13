import createSagaMiddleware from "redux-saga";
import { configureStore} from "@reduxjs/toolkit";
import { reducer } from "./reducers";
import rootSaga from "./ReduxSaga";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key:'root',
  storage,
  //blacklist : ['fetchProduct']   // to prevent this reducer state from persisting
}


const sagamiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, reducer);
const middleware = [sagamiddleware]
export const store = configureStore({
    reducer: persistedReducer,
    middleware: middleware
  });

export const persistedStore = persistStore(store);

sagamiddleware.run(rootSaga)