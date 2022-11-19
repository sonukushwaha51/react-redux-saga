import React from "react";
import {NavLink} from 'react-router-dom';
import { Card, Button } from "reactstrap";

function FooterComponent() {
    return(
        <React.Fragment>
  
            <Card className="container col-lg-12 col-md-12 m-3 footers">
                <Button><NavLink className="nav-link" to="/home">Home</NavLink></Button>
                <Button><NavLink className= 'nav-link' to = "/contactus">Contact Us</NavLink></Button>
                <Button><NavLink className="nav-link" to = "/offers">Offers</NavLink></Button>
                <Button><NavLink className="nav-link" to = "/buying-guides">Buying Guides</NavLink></Button>
            </Card>

        </React.Fragment>
    );
}

export default FooterComponent;