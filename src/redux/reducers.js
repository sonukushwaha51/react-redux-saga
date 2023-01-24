import { combineReducers } from "redux";
import { actions } from "./actionTypes";
import { addedProductList, basketAmount, basketCount, products } from "./state";

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
export const addedProductToBasket = (state = addedProductList, action) => {
    switch(action.type) {
        case actions.ADD_TO_CART:
            return {
                addedProduct : [...state.addedProduct, action.payload]
            }
        default:
            return state
    }
}

export const calculateAmount = (state = basketAmount, action) => {
    switch(action.type) {
        case actions.CALCULATE_CART_AMOUNT:
            return {
                amountWithoutTax: 0.80 * action.payload,
                taxAmount: 0.20 * action.payload,
                totalAmount: action.payload
            }
        default:
            return state
    }
}

export const reducer = combineReducers({
    fetchProduct : fetchProductReducer,
    changeBasket : changeBasketCount,
    addToBasket : addedProductToBasket,
    calculateAmount: calculateAmount
})