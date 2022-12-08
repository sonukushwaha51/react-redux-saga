import {all, takeEvery} from "redux-saga/effects"
import { fetchProducts } from "./actionCreator"
import { actions } from "./actionTypes"

function* watcherFetchProduct() {
    yield takeEvery(actions.FETCH_PRODUCT, fetchProducts)
} 


export default function* rootSaga() {
    yield all([
      watcherFetchProduct()
    ])
  }
