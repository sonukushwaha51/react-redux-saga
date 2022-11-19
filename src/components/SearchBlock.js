import React from "react";

function SearchBlock() {
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="main-search-block col-lg-12-col-sm-12 col-md-12">
                        <div className="col-lg-3 col-md-3">
                            <div className="company-logo">
                                <img src = "" alt="Online Book Store"></img>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9">
                            <div className="search-block">
                                <input type = "text" placeholder="Search Here" id="search-box"></input>
                                <button className="search">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SearchBlock;