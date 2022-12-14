import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, incrementBasket } from "../redux/actionCreator";

function Product() {
    const dispatch = useDispatch();

    const getProductList = useSelector(state => state.fetchProduct.product)
    useEffect(() => {
        dispatch(getProduct())      
    },[dispatch])
    const addToBasket = () => {
        dispatch(incrementBasket())
    }
    return(
        <React.Fragment>
            <div className="product">
                <h1 className="heading mb-3"> PRODUCTS </h1>
                {getProductList.map((product) => {
                    return(
                        <div key={product.id}>
                                <div className="product-list">
                                <div className="product-image">
                                    <div className="main-image">
                                    <img className="product-img" src={product.imgUrl} alt={product.name}/>
                                    </div>
                                </div>
                                <div className="product-details">
                                    <h2 className="product-name">{product.name}</h2>
                                    <p className="product-description">{product.description}</p>
                                </div>
                                <div className="product-action">
                                    <div className="product-price">
                                        <h2>INR {product.price}</h2>
                                    </div>
                                    <div className="product-stock">
                                        {product.stock > 0 ? <div className="in-stock"> Currently in Stock</div> : <div className="out-of-stock"> Out Of Stock</div>}
                                    </div>
                                    <div className="action-buttons">
                                        {product.stock > 0 ?
                                            <button className="btn btn-success add-to-basket" onClick={addToBasket}>ADD TO CART</button> :
                                            <button className="btn btn-primary notify-me">NOTIFY ME</button>
                                        }
                                        <button className="btn btn-primary add-to-wishlist">ADD TO WISHLIST</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </React.Fragment>
    )
}

export default Product