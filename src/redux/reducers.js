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
        case actions.RESET_BASKET: 
            return  {
                value : 0
            }
        case actions.DECREMENT_BASKET_QUANTITY: 
            return {
                value : state.value - action.payload
            }
        default:
            return state
    }
}
export const addedProductToBasket = (state = addedProductList, action) => {
    switch(action.type) {
        case actions.ADD_TO_CART:
            if(state.addedProduct.length > 0) {
                var a = 0;
                state.addedProduct.forEach((product) => {
                    if(product.cartProduct.id === action.payload.id) {
                        product.quantity++;
                        a++;
                    }
                })
                if(a === 0 ) {
                    return {
                        addedProduct : [...state.addedProduct, {
                            cartProduct : action.payload,
                            quantity : 1
                        }]
                    }
                }
                else {
                    return {
                        addedProduct : [...state.addedProduct]
                    }
                }
            } 
                
            else {
                return {
                    addedProduct : [...state.addedProduct, {
                        cartProduct : action.payload,
                        quantity : 1
                    }]
                }
            }
        case actions.REMOVE_CART:
            return {
                addedProduct : state.addedProduct.filter((product) => product.cartProduct.id !== action.payload.cartProduct.id)
            }
        case actions.DECREMENT_QUANTITY:
             action.payload.quantity = action.payload.quantity - 1;
             return {
                addedProduct: [...state.addedProduct]
             }
        case actions.EMPTY_CART: 
            return {
                addedProduct : []
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