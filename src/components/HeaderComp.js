import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Card, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import SearchBlock from "./SearchBlock";

function HeaderComponent() {
    return(
        <React.Fragment>
            <SearchBlock />
            <Card className="container col-lg-12 col-md-12 m-3 headers">
                <Button><NavLink className="nav-link" to="/home">Home</NavLink></Button>
                <UncontrolledDropdown>
                <DropdownToggle className="btn-secondary">
                    <NavLink className= 'nav-link' to = "/category">Category</NavLink>
                </DropdownToggle>
                    <DropdownMenu className = "category-types">
                            <DropdownItem className="category-type btn-secondary">
                                <NavLink className="category-name" to = "/">Novels</NavLink>
                            </DropdownItem>
                            <DropdownItem className="category-type btn-secondary">
                                <NavLink className="category-name" to = "/">Business</NavLink>
                            </DropdownItem>
                            <DropdownItem className="category-type btn-secondary">
                                <NavLink className="category-name" to = "/">Science</NavLink>
                            </DropdownItem>
                            <DropdownItem className="category-type btn-secondary">
                                <NavLink className="category-name" to = "/">Comics</NavLink>
                            </DropdownItem>
                            <DropdownItem className="category-type btn-secondary">
                                <NavLink className="category-name" to = "/">Biography</NavLink>
                            </DropdownItem>
                    </DropdownMenu></UncontrolledDropdown>
                <Button><NavLink className="nav-link" to = "/offers">Offers</NavLink></Button>
                <Button><NavLink className="nav-link" to = "/buying-guides">Buying Guides</NavLink></Button>
                <Button>
                <NavLink className= 'nav-link' to = "/contactus">Contact Us</NavLink>
                </Button>
                
            </Card>
        </React.Fragment>
    );
}

export default HeaderComponent;