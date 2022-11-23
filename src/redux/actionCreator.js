import axios from "axios";
import { actions } from "./actionTypes";

export function fetchProducts() {
    return {
        next : function (dispatch) {
            axios.get("http://localhost:3000/product").then((response) => {
            console.log(response.data)
            dispatch(fetchProductAction(response.data))
            }).catch(err => console.log(err.message))
        } 
    }
}

export const fetchProductAction = (product) => {
    return {
        type : actions.FETCH_PRODUCT,
        payload : product
    }
}