import React from "react";
import { useSelector } from "react-redux";
import {NavLink} from "react-router-dom";

function SearchBlock() {

    const basketCount = useSelector(state => state.changeBasket.value)
    
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="main-search-block col-lg-12-col-sm-12 col-md-12">
                        <div className="col-lg-3 col-md-3">
                            <div className="company-logo">
                                <img className="company-icon-img" src = "https://www.dsource.in/sites/default/files/resource/logo-design/logos/institution-logos/images/5-Indian-Design-Mark.jpg" alt="Online Book Store"></img>
                            </div>
                        </div>
                        <div className="search-action-block col-lg-9 col-md-9">
                            <div className="search-block">
                                <input type = "text" placeholder="Search Here" id="search-box"></input>
                                <button className="search">
                                <i className="bi bi-search">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>
                                </i></button>
                            </div>
                            <div className="login-action">
                            <button type="button" className="btn btn-outline-info">LOGIN</button>
                                
                            </div>
                            <NavLink className="visit-cart" to = "/mycart">
                            <div className="cart-summary">
                                    
                                    <i className="bi bi-basket3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-basket3" viewBox="0 0 16 16">
                                    <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z"/>
                                    </svg>
                                    </i>
                                    {
                                        basketCount > 0 ? <span className="basket-count">{basketCount}</span> : ''
                                    }
                            </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SearchBlock;