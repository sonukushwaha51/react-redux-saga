import { combineReducers } from "redux";
import { actions } from "./actionTypes";
import { products } from "./state";

export const fetchProductReducer = (state = products,action) => {
    switch(action.type) {
        case actions.FETCH_PRODUCT:
            return {
                product : action.payload
            }
        default:
            return state
    }
}

export const reducer = combineReducers({
    fetchProduct : fetchProductReducer
})