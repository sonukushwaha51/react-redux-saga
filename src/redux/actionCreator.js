import axios from "axios";
import { put } from "redux-saga/effects";
import { actions } from "./actionTypes";

export function* fetchProducts() {
    let result = yield axios.get("http://localhost:3000/product").then(res => res.data)
    console.log(result);
    
    yield put(fetchProductAction(result))
}

export const getProduct = () => {
    return {
        type : actions.FETCH_PRODUCT
    }
}
export const fetchProductAction = (product) => {
    return {
        type : actions.SET_PRODUCT,
        payload: product
    }
}

export const incrementBasket = () => {
    return {
        type : actions.INCREMENT_BASKET
    }
}
export const decrementBasket = () => {
    return {
        type : actions.DECREMENT_BASKET
    }
}