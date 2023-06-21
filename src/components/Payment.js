import React from "react";
import HeaderComponent from "./HeaderComp";
import FooterComponent from "./FooterComp"; 


function Payment() {
    return(
        <React.Fragment>
            <HeaderComponent />
            <div className="container">
                <div className="row">
                    <h1>Checkout page</h1>
                </div>
            </div>
            <FooterComponent />
        </React.Fragment>
    )
}

export default Payment;