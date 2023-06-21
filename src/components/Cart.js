import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { addToCart, calculateAmountDispatch, removeFromCart , removeAllCartItem, resetBasketCount, decrementCartQuantity, decrementBasket, incrementBasket, decreaseBasketCount} from "../redux/actionCreator";
import FooterComponent from "./FooterComp";
import HeaderComponent from "./HeaderComp";
import {NavLink} from "react-router-dom";

function Cart() {
    const cartItem = useSelector((state) => state.addToBasket.addedProduct)
    console.log(cartItem)

    if(cartItem.length !== 0) {
        var totalAmount = cartItem.map((product) => product.cartProduct.price * product.quantity).reduce((a,b) => a + b)
    }

    
    const amount = useSelector(state => state.calculateAmount)
    const dispatch = useDispatch();
    const addToBasket = (item) => {
        dispatch(addToCart(item))
        dispatch(incrementBasket())
    }
    const removeItem = (product,quantity) => {
        dispatch(removeFromCart(product))
        dispatch(decreaseBasketCount(quantity))
    }
    const decrementQuantity = (product) => {
        dispatch(decrementCartQuantity(product))
        dispatch(decrementBasket())
    }
    const emptyCart = () => {
        dispatch(removeAllCartItem())
        dispatch(resetBasketCount())
    }
    useEffect(() => {
        dispatch(calculateAmountDispatch(totalAmount))
    },[dispatch,totalAmount,cartItem])
    return(
        <React.Fragment>
            <HeaderComponent />
            <div className="container">
                <div className="row">
                    <div className="cart-page">
                        {cartItem.length !== 0 ? 
                        <><div>
                        {cartItem.map((product) => {

                            return(
                                <div key={product.cartProduct.id}>
                                    <div className="cart-product">
                                        <div className="product-image">
                                            <div className="main-image">
                                                <img className="product-img" src={product.cartProduct.imgUrl} alt={product.cartProduct.name}/>
                                            </div>
                                        </div>
                                        <div className="cart-prodcut-desc">
                                            <div className="cart-text-block">
                                                <h2 className="cart-product-name">{product.cartProduct.name}</h2>
                                                <p className="cart-product-description">{product.cartProduct.description}</p>
                                                <p className="cart-product-price"><span style={{fontWeight : 600}}>Cost: INR {product.cartProduct.price}</span></p>
                                            </div>
                                            <div className="cart-action-buttons">
                                                <Button onClick={() => decrementQuantity(product)}>-</Button>
                                                <p className="item-quantity">{product.quantity}</p>
                                                <Button onClick={() => addToBasket(product.cartProduct)}>+</Button>
                                                <div className="remove-cart-item">
                                                    <Button color="danger" onClick={() => removeItem(product, product.quantity)}>Remove</Button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )
                        })}
                        </div>
                        <div className="cart-checkout-summary">
                            <h3 className="amount-without-tax"><span>Amount without tax:</span><span>{amount.amountWithoutTax}</span></h3>
                            <h3 className="tax-amount"><span>Tax Amount:</span><span>{amount.taxAmount}</span></h3>
                            <h3 className="total-amount"><span>Total Amount:</span><span>{amount.totalAmount}</span></h3>
                            <div className="cart-checkout-button">
                                <Button color="primary"><NavLink to="/checkout">CHECKOUT NOW</NavLink></Button>
                            </div>
                        </div>
                        <div className="empty-cart-section">
                            <Button color="danger" className="empty-cart" onClick={emptyCart}>Empty Cart</Button>
                        </div></>
                        : <h2>You have not added any product in basket.</h2>}
                    </div>
                </div>
            </div>
            <FooterComponent />
        </React.Fragment>
    )
}

export default Cart;