import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { addToCart, calculateAmountDispatch } from "../redux/actionCreator";
import FooterComponent from "./FooterComp";
import HeaderComponent from "./HeaderComp";

function Cart() {
    const cartItem = useSelector((state) => state.addToBasket.addedProduct)
    const totalAmount = cartItem.map((product) => product.price).reduce((a,b) => a + b)
    const amount = useSelector(state => state.calculateAmount)
    const dispatch = useDispatch();
    const addToBasket = (item) => {
        dispatch(addToCart(item))
    }
    useEffect(() => {
        dispatch(calculateAmountDispatch(totalAmount))
    },[dispatch,totalAmount])
    return(
        <React.Fragment>
            <HeaderComponent />
            <div className="container">
                <div className="row">
                    <div className="cart-page">
                        <div>
                        {cartItem.map((product,quantity = 1) => {
                            return(
                                <div key={product.id}>
                                    <div className="cart-product">
                                        <div className="product-image">
                                            <div className="main-image">
                                                <img className="product-img" src={product.imgUrl} alt={product.name}/>
                                            </div>
                                        </div>
                                        <div className="cart-prodcut-desc">
                                            <div className="cart-text-block">
                                                <h2 className="cart-product-name">{product.name}</h2>
                                                <p className="cart-product-description">{product.description}</p>
                                            </div>
                                            <div className="cart-action-buttons">
                                                <Button>-</Button>
                                                <p className="item-quantity">{quantity}</p>
                                                <Button onClick={() => addToBasket(product)}>+</Button>
                                                <div className="remove-cart-item">
                                                    <Button color="danger" >Remove</Button>
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
                                <Button color="primary">CHECKOUT NOW</Button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <FooterComponent />
        </React.Fragment>
    )
}

export default Cart;