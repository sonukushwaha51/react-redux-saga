import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actionCreator";

function Product() {
    const dispatch = useDispatch();

    useEffect(() => {
        useCallback(() => dispatch(fetchProducts()))
    },[])
    const getProductList = useSelector(state => state.fetchProduct.product)
    return(
        <React.Fragment>
            <div className="product-list">
                <h1 className="heading mb-3"> PRODUCTS </h1>
                {getProductList.map((product) => {
                    return(
                        <div key={product.id}>
                            <div>{product.name}</div>
                        </div>
                    )
                })}
            </div>
        </React.Fragment>
    )
}

export default Product