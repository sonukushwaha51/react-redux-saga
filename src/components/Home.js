import React from "react";
import HeaderComponent from "./HeaderComp";
import MainBlock from "./main-block-homepage";
import FooterComponent from "./FooterComp";

function Home() {
    return(
        
        <React.Fragment>
                        
            <div className="container">
                <div className="row">
                    <HeaderComponent></HeaderComponent>
                    <MainBlock></MainBlock>
                    <FooterComponent></FooterComponent>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;
