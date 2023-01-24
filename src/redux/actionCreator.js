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

export const addToCart = (data) => {
    return {
        type: actions.ADD_TO_CART,
        payload : data
    }
}

export const removeFromCart = () => {
    return {
        type: actions.REMOVE_CART
    }
}

export const calculateAmountDispatch = (totalAmount) => {
    return {
        type: actions.CALCULATE_CART_AMOUNT,
        payload : totalAmount
    }
}