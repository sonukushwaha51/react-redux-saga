import React from "react";
import HeaderComponent from "./HeaderComp";
import FooterComponent from "./FooterComp";

function Contact(props) {
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <HeaderComponent />
                    <div className="contact-us-main-block container">
                        <div className="company-details row">
                            <p className="company-name-heading">Company Name</p>
                            <p className="company-name-text">ABC Book Store</p>
                            <p className="Contact no.">+91 98437637543</p>
                            <p className="company-address">Lincoln road, Matunga, Dadar, Mumbai - 400012</p>
                            <p className="company-locations">Mumbai, Bangalore, Chennai, Ahemedabad</p>
                            <p>{props.abc}</p>
                        </div>
                    </div>
                    <FooterComponent />
                </div>
            </div>

        </React.Fragment>
    );
}

export default Contact;