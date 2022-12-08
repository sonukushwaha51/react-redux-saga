import { combineReducers } from "redux";
import { actions } from "./actionTypes";
import { basketCount, products } from "./state";

export const fetchProductReducer = (state = products,action) => {
    switch(action.type) {
        case actions.SET_PRODUCT:
            return {
                product : action.payload
            }
        default:
            return state
    }
}

export const changeBasketCount = (state = basketCount, action) => {
    switch(action.type) {
        case actions.INCREMENT_BASKET:
            return {
                value: state.value + 1
            }
        case actions.DECREMENT_BASKET:
            return {
                value: state.value - 1
            }
        default:
            return state
    }
}

export const reducer = combineReducers({
    fetchProduct : fetchProductReducer,
    changeBasket : changeBasketCount
})