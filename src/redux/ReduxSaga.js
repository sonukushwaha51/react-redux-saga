import {all, takeEvery} from "redux-saga/effects"
import { fetchProducts } from "./actionCreator"
import { actions } from "./actionTypes"

function* watcherFetchProduct() {
    yield takeEvery(actions.FETCH_PRODUCT, fetchProducts)
} 

// function* watcherAddProductToBasket() {
//   yield takeEvery(actions.ADD_TO_CART)
// }

// function* watcherRemoveProductFromBasket() {
//   yield takeEvery(actions.REMOVE_CART)
// }

export default function* rootSaga() {
    yield all([
      watcherFetchProduct()
    ])
  }
